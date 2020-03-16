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
		flexGrow: 1,
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
	mutation ListApplicationsMutation(
		$id: ID!
		) {
			deleteApplication(id:$id) {
				success
		}
	}  
`;

function commitMutationRequest(environment, mutation, variables) {
	const mVariables = variables
	const jVariables = { "id": mVariables }
	console.log("jVariables:",jVariables)
	commitMutation(
		environment,
		{
			mutation,
			jVariables,
			onCompleted: (response, errors) => {
				console.log('Response received from server.')
			},
			onError: err => console.error(err),
		},
	)
}

export default function ListApplications() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<QueryRenderer
				environment={environment}
				query={graphql`
				query ListApplicationsQuery {
						applicationsList {
							Id
							value
							label
							version
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
											<TableCell>Version</TableCell>
											<TableCell>Actions</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{props.applicationsList.map(row => (
											<TableRow key={row.Id}>
												<TableCell component="th" scope="row">
													{row.label}
												</TableCell>
												<TableCell component="th" scope="row">
													{row.version} {row.Id}
												</TableCell>
												<TableCell component="th" scope="row">
													<Button onClick={() => commitMutationRequest(environment, mutation, row.Id)}>Delete</Button>
												</TableCell>
											</TableRow>
										))}
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