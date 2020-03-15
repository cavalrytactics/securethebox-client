import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'graphql/consts/environment'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
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

export default function ListApplications() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<QueryRenderer
				environment={environment}
				query={graphql`
				query ListApplicationsQuery {
						applicationsList {
							id
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
						return (
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell>Label</TableCell>
											<TableCell>Version</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{props.applicationsList.map(row => (
											<TableRow key={row.id}>
												<TableCell component="th" scope="row">
													{row.label}
												</TableCell>
												<TableCell component="th" scope="row">
													{row.version}
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