import React, { useState } from 'react';
import { commitMutation } from 'react-relay';
import { fetchQuery } from 'relay-runtime';
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
import Moment from 'react-moment';
import CountdownTimer from './CountdownTimer'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create';
import { useHistory } from "react-router-dom";

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
	mutation ListProblemsMutation(
		$ID: ID!
		) {
			deleteProblem(ID:$ID) {
				success
		}
	}  
`;


export default function ListProblems() {
	const classes = useStyles();
	let history = useHistory();
	function updateProblem(ID) {
		history.push({
			pathname: '/problems/update',
			search: '?ID=' + ID,
			state: { ID: ID }
		})
	}
	function viewProblem(ID) {
		history.push({
			pathname: '/problems/view',
			search: '?ID=' + ID,
			state: { ID: ID }
		})
	}

	const [values, setValues] = useState([]);

	const queryNow = graphql`
		query ListProblemsQuery {
				problemsList {
					ID
					value
					label
					number
					points
					startDate
					dueDate
					rejectDate
			} 
		}
	`
	
	if (values.length === 0){
		fetchQuery(environment, queryNow, {})
		.then(data => {
			setValues(data.problemsList)
		});
	}
	
	function commitMutationRequest(environment, mutation, ID) {
		const variables = { ID }
		commitMutation(
			environment,
			{
				mutation,
				variables,
				onCompleted: (response, errors) => {
					console.log('Response received from server.')
					setValues(values.slice(values.indexOf(ID, 1)))
				},
				onError: err => console.error(err),
			},
		)
	}
	return (
		<Paper className={classes.paper}>
			<TableContainer component={Paper}>
				<Table className={classes.table} size="small" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Number</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Points</TableCell>
							<TableCell>Start</TableCell>
							<TableCell>Due</TableCell>
							<TableCell>Reject</TableCell>
							<TableCell>Remaining</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{values.map((row,index) => {
							return (
								<TableRow key={row.ID}>
									<TableCell component="th" scope="row">
										{row.number}
									</TableCell>
									<TableCell component="th" scope="row">
										<button onClick={() => viewProblem(row.ID)}>{row.label}</button>
									</TableCell>
									<TableCell component="th" scope="row">
										{row.points}
									</TableCell>
									<TableCell component="th" scope="row">
										<Moment format="MM/DD HH:mm">
											{row.startDate}
										</Moment>
									</TableCell>
									<TableCell component="th" scope="row">
										<Moment format="MM/DD HH:mm">
											{row.dueDate}
										</Moment>
									</TableCell>
									<TableCell component="th" scope="row">
										<Moment format="MM/DD HH:mm">
											{row.rejectDate}
										</Moment>
									</TableCell>
									<TableCell component="th" scope="row">
										<CountdownTimer dueTime={row.dueDate} />
									</TableCell>
									<TableCell component="th" scope="row">
										<IconButton onClick={() => updateProblem(row.ID)}><EditIcon fontSize="small" /></IconButton>
										<IconButton onClick={() => commitMutationRequest(environment, mutation, row.ID)}><DeleteIcon fontSize="small" /></IconButton>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}