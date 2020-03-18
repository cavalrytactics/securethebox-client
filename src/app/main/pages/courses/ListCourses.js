import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'graphql/consts/environment'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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

export default function ListCourses() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<QueryRenderer
				environment={environment}
				query={graphql`
				query ListCoursesQuery {
						coursesList {
							id
							activeStep
							cluster {
								label
								value
								status
							}
							category{
								label
								value
							}
							slug
							length
							title
							totalSteps
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
											<TableCell>Category</TableCell>
											<TableCell>Title</TableCell>
											<TableCell>Length</TableCell>
											<TableCell>Actions</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{props.coursesList.map(row => {
											var minutes = ("0" + Math.floor((row.length / 60000) % 60)).slice(-2)
											var hours = ("0" + Math.floor((row.length / 3600000) % 60)).slice(-2)
											return (
												<TableRow key={row.id}>
													<TableCell component="th" scope="row">
														{row.category.label}
													</TableCell>
													<TableCell component="th" scope="row">
														{row.title}
													</TableCell>
													<TableCell component="th" scope="row">
														{hours}:{minutes}
													</TableCell>
													<TableCell component="th" scope="row">
														<Button>
															start
													</Button>
													</TableCell>
												</TableRow>)
										})}
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