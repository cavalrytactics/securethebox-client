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
import CountdownTimer from './CountdownTimer'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create';
import { useHistory } from "react-router-dom";

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
	mutation ListCoursesMutation(
		$ID: ID!
		) {
			deleteCourse(ID:$ID) {
				success
		}
	}  
`;


function ListCourses() {
	const classes = useStyles();
	const history = useHistory();

	function updateCourse(ID) {
		history.push({
			pathname: '/courses/update',
			search: '?ID=' + ID,
			state: { ID: ID }
		})
	}
	function viewCourse(ID) {
		history.push({
			pathname: '/courses/view',
			search: '?ID=' + ID,
			state: { ID: ID }
		})
	}

	const [values, setValues] = React.useState([]);

	const queryNow = graphql`
		query ListCoursesQuery {
				coursesList {
					ID
					title
					description
					startDate
					dueDate
					destroyDate
					category {
						ID
						label
						value
						color
					}
					cluster {
						ID
						label
						value
						status	
					}
			} 
		}
	`

	if (values !== null && values !== undefined && values.length === 0) {
		fetchQuery(environment, queryNow, {})
			.then(data => {
				setValues(data.coursesList)
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

	if (values !== null && values !== undefined && values.length > 0) {
		return (
			<Paper className={classes.paper}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Category</TableCell>
								<TableCell>Title</TableCell>
								<TableCell>Start</TableCell>
								<TableCell>Due</TableCell>
								<TableCell>Remaining</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{values.map((row, index) => {
								return (
									<TableRow key={row.ID}>
										<TableCell component="th" scope="row">
											{row.category.label}
										</TableCell>
										<TableCell component="th" scope="row">
											<button onClick={() => viewCourse(row.ID)}>{row.title}</button>
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
											<CountdownTimer dueTime={row.dueDate} />
										</TableCell>
										<TableCell component="th" scope="row">
											<IconButton onClick={() => updateCourse(row.ID)}><EditIcon fontSize="small" /></IconButton>
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
	} else {
		return (
			<Paper>No Courses... Create one</Paper>
		)
	}
}

function mapStateToProps({ auth }) {
	return {
		user: auth.user
	}
}

export default withReducer('auth', reducer)((connect(mapStateToProps)(ListCourses)));
