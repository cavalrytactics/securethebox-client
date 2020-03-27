import React from 'react';
import withReducer from 'app/store/withReducer';
import connect from 'react-redux/es/connect/connect';
import reducer from 'app/auth/store/reducers';
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
	mutation ListSubmissionsMutation(
		$ID: ID!
		) {
			deleteSubmission(ID:$ID) {
				success
		}
	}  
`;


function ListSubmissions() {
	const classes = useStyles();
	const history = useHistory();

	function updateSubmission(ID) {
		history.push({
			pathname: '/submissions/update',
			search: '?ID=' + ID,
			state: { ID: ID }
		})
	}
	function viewSubmission(ID) {
		history.push({
			pathname: '/submissions/view',
			search: '?ID=' + ID,
			state: { ID: ID }
		})
	}

	const [values, setValues] = React.useState([]);

	const queryNow = graphql`
		query ListSubmissionsQuery {
				submissionsList {
					ID
					author
					verdict
					creationTime
					relativeTime
					points
					content
			} 
		}
	`
	
	if (values.length === 0){
		fetchQuery(environment, queryNow, {})
		.then(data => {
			setValues(data.submissionsList)
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
							<TableCell>Author</TableCell>
							<TableCell>Verdict</TableCell>
							<TableCell>Created</TableCell>
							<TableCell>Relative</TableCell>
							<TableCell>Points</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{values.map((row, index) => {
							return (
								<TableRow key={row.ID}>
									<TableCell component="th" scope="row">
										<button onClick={() => viewSubmission(row.ID)}>{row.ID}</button>
									</TableCell>
									<TableCell component="th" scope="row">
										{row.points}
									</TableCell>
									<TableCell component="th" scope="row">
										<Moment format="MM/DD HH:mm">
											{row.creationTime}
										</Moment>
									</TableCell>
									<TableCell component="th" scope="row">
										<IconButton onClick={() => updateSubmission(row.ID)}><EditIcon fontSize="small" /></IconButton>
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

function mapStateToProps({ auth }) {
	return {
		user: auth.user
	}
}

export default withReducer('auth', reducer)((connect(mapStateToProps)(ListSubmissions)));