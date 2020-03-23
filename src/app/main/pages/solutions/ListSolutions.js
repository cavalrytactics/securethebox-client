import React from 'react';
import { QueryRenderer, commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'graphql/consts/environment'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Style Control
const useStyles = makeStyles(theme => ({
	root: {
		flexGap: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	table: {
		minWidth: 650,
	},
}));

const mutation = graphql`
	mutation ListSolutionsMutation(
		$ID: ID!
		) {
			deleteSolution(ID:$ID) {
				success
		}
	}  
`;

function commitMutationRequest(environment, mutation, ID) {
	const variables = { ID, }
	commitMutation(
		environment,
		{
			mutation,
			variables,
			onCompleted: (response, errors) => {
				console.log('Response received from server.')
			},
			onError: err => console.error(err),
		},
	)
}

function renderRows(solutionsList) {
	return solutionsList.map((row) => {
		return (
			<TableRow key={row.ID}>
				<TableCell component="th" scope="row">
					{row.label}
				</TableCell>
				<TableCell component="th" scope="row">
					{row.value}
				</TableCell>
				<TableCell component="th" scope="row">
					<Button onClick={() => commitMutationRequest(environment, mutation, row.ID)}>Delete</Button>
				</TableCell>
			</TableRow>
		)
	})
}

export default function ListSolutions() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<QueryRenderer
				environment={environment}
				query={graphql`
				query ListSolutionsQuery {
						solutionsList {
							ID
							value
							label
					} 
				}
				`}
				variables={{}}
				render={({ error, props }) => {
					// If Graphql query has error
					if (error) {
						return <div>Error Calling Backend!</div>;
					}
					// If waiting for data
					if (!props) {
						return <div>Loading...</div>;
					}
					// If received data
					if (props) {
						console.log(props)
						return (
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell>Label</TableCell>
											<TableCell>Value</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{renderRows(props.solutionsList)}
									</TableBody>
								</Table>
							</TableContainer>
						)
					}
				}}
			/>
		</Paper>
	)
}