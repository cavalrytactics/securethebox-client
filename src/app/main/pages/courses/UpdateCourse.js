import React, { useState } from 'react';
import connect from 'react-redux/es/connect/connect';
import withReducer from 'app/store/withReducer';
import reducer from 'app/auth/store/reducers';
import { commitMutation } from 'react-relay';
import { fetchQuery } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker } from "@material-ui/pickers";
import environment from 'graphql/consts/environment';
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Styles only works with Material-UI components 
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		fontSize: 14,
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
	},
	instructions: {
		fontSize: 14,
		textAlign: "left"
	},
	button: {
		fontSize: 14
	}
}));

// Graphql Mutation 
const mutation = graphql`
	mutation UpdateCourseMutation(
		$ID: ID!,
		$title: String!,
		$description: String!,
		$category: CategoryInput!,
		$cluster: ClusterInput!
		$startDate: String!,
		$dueDate: String!,
		$destroyDate: String!,
		) {
		updateCourse(
			courseData: {
				ID: $ID,
				title: $title,
				description: $description,
				startDate: $startDate,
				dueDate: $dueDate,
				destroyDate: $destroyDate
				},
			categoryData: $category,
			clusterData: $cluster
			) {
			course {
				ID
			}
		}
	} 
`;

// Relay payload
function commitMutationRequest(environment, mutation, variables) {
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

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function UpdateCourse(props) {
	const location = useLocation();
	let history = useHistory();
	const query = useQuery();
	const classes = useStyles(); //styling
	const { register, handleSubmit, errors } = useForm(); // initialise the hook

	// local state management 
	const [values, setValues] = useState({
		ID: '',
		title: '',
		description: '',
		dueDate: new Date(),
		startDate: new Date(),
		rejectDate: new Date(),
		category: {},
		cluster: {}
	});

	const handleMultiChangeCategory = value => {
		setValues({...values, "category": value});
	}
	const handleMultiChangeCluster = value => {
		setValues({...values, "cluster": value});
	}
	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	}
	function handleChangeStartDate(value) {
		setValues({ ...values, "startDate": value })
	}
	function handleChangeDueDate(value) {
		setValues({ ...values, "dueDate": value })
	}
	function handleChangeDestroyDate(value) {
		setValues({ ...values, "destroyDate": value })
	}

	// react-hook-form local state
	// Submit request to Graphql Server
	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = values
		variables["cluster"] = values.cluster 
		variables["category"] = values.category
		commitMutationRequest(environment, mutation, variables)
	};
	const queryNow = graphql`
	query UpdateCourseQuery($ID: ID!){
		course(ID: $ID){
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
				}
				cluster {
					ID
					label
					value
				}
			}
		}
	`

	if (values.ID !== '' && location.state.ID !== '' && location.state.ID !== undefined && location.state.ID !== null && query.get("ID") !== null) {
		const queryVariables = { "ID": location.state.ID }
		// This will only make the request to load state once ; this is important
		if (values.ID === '') {
			fetchQuery(environment, queryNow, queryVariables)
				.then(data => {
					setValues(data.course)
				});
		}
	} else {
		// check if ID is valid
		const queryVariables = { "ID": query.get("ID") }
		// This will only make the request to load state once ; this is important
		if (values.ID === '' && query.get("ID") !== null) {
			fetchQuery(environment, queryNow, queryVariables)
				.then(data => {
					setValues(data.course)
				});
		}
	}

	function cancelCourse(ID) {
		history.push({
			pathname: '/courses/list'
		})
	}

	if (values.ID !== '' && location.state.ID !== '' && location.state.ID !== undefined && location.state.ID !== null && query.get("ID") !== null) {
		return (
			<Paper className={classes.paper}>
				<form>
					< Grid container spacing={3} >
						<Grid item xs={12}>
							<TextField
								label="Title"
								name="title"
								value={values.title}
								onChange={handleChange('title')}
								inputRef={register({ required: true })}
								fullWidth
								variant="outlined"
							/>
							<p>
								{errors.title && 'Title is required.'}
							</p>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Description"
								name="description"
								value={values.description}
								onChange={handleChange('description')}
								inputRef={register({ required: true })}
								fullWidth
								variant="outlined"
							/>
							<p>
								{errors.description && 'Description is required.'}
							</p>
						</Grid>
						<Grid item xs={12} sm={6}>
							<span>Select Category</span>
							<Select
								value={values.category}
								options={props.categoriesList}
								onChange={handleMultiChangeCategory}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<span>Select Cluster</span>
							<Select
								value={values.cluster}
								options={props.clustersList}
								onChange={handleMultiChangeCluster}
							/>
						</Grid>
						<Grid item xs={10} sm={3}>
							<DateTimePicker
								label="Start Date and Time"
								name="startDate"
								format="YYYY-MM-DDTHH:mm"
								inputVariant="outlined"
								inputRef={register({ required: true })}
								value={values.startDate}
								onChange={handleChangeStartDate}
								disablePast
								showTodayButton
							/>
						</Grid>
						<Grid item xs={10} sm={3}>
							<DateTimePicker
								label="Due Date and Time"
								name="dueDate"
								format="YYYY-MM-DDTHH:mm"
								inputVariant="outlined"
								inputRef={register({ required: true })}
								value={values.dueDate}
								onChange={handleChangeDueDate}
								disablePast
								showTodayButton
							/>
						</Grid>
						<Grid item xs={10} sm={3}>
							<DateTimePicker
								label="Destroy Date and Time"
								name="destroyDate"
								format="YYYY-MM-DDTHH:mm"
								inputVariant="outlined"
								inputRef={register({ required: true })}
								value={values.destroyDate}
								onChange={handleChangeDestroyDate}
								disablePast
								showTodayButton
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Button className={classes.button} onClick={handleSubmit(onSubmit)}>Update Course</Button>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Button className={classes.button} onClick={() => cancelCourse()}>Cancel</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		)
	} else {
		return (
			<Paper className={classes.paper}>
				Not a valid ID
			</Paper>
		)
	}
}

function mapStateToProps({ auth }) {
	return {
		user: auth.user
	}
}

export default withReducer('auth', reducer)((connect(mapStateToProps)(UpdateCourse)));