import React, { useState } from 'react';
import withReducer from 'app/store/withReducer';
import connect from 'react-redux/es/connect/connect';
import reducer from 'app/auth/store/reducers';
import { QueryRenderer, commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import environment from 'graphql/consts/environment';
import { DateTimePicker } from "@material-ui/pickers";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
	formControl: {
		minWidth: 200,
	},
}));

// Graphql Mutation to create Course
const mutation = graphql`
	mutation CreateCourseMutation(
		$title: String!, 
		$description: String!, 
		$category: CategoryInput!,
		$cluster: ClusterInput!
		$startDate: String!
		$dueDate: String!
		$destroyDate: String!
		) {
		createCourse(
			courseData: {
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
				title
				description
				startDate
				dueDate
				destroyDate
			}
		}
	}
`;

// Wizard form
function CreateCourse(props) {
	// styling
	const classes = useStyles();
	const { register, handleSubmit, errors } = useForm(); // initialise the hook

	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = values
		variables["cluster"] = values.cluster
		variables["category"] = values.category
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
		);
	};

	// local state management 
	const [values, setValues] = useState({
		title: '',
		description: '',
		category: '',
		cluster: '',
		startDate: new Date(),
		dueDate: new Date(),
		destroyDate: new Date(),
		user: '',
		status: ''

	})

	const handleMultiChangeCategory = event => {
		setValues({ ...values, "category": event.target.value });
	}
	const handleMultiChangeCluster = event => {
		setValues({ ...values, "cluster": event.target.value });
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

	return (
		<Paper className={classes.paper}>
			{/* This is React 'Relay' used to query and render graphql data */}
			<QueryRenderer
				environment={environment}
				query={graphql`
				query CreateCourseQuery {
					categoriesList {
						ID
						value
						label
						color
					}
					clustersList {
						ID
						value
						label
						status
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
							<form>
								<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" >
									<Grid item xs={10}>
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
									<Grid item xs={10}>
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
									<Grid item xs={10} sm={5}>
										<FormControl variant="outlined" className={classes.formControl}>
											<InputLabel>Category</InputLabel>
											<Select
												value={values.category}
												onChange={handleMultiChangeCategory}
												label="Category"
											>
												{props.categoriesList.map((item, index) => {
													return (
														<MenuItem key={item.label} value={item}>{item.label}</MenuItem>
													)
												})}
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={10} sm={5}>
										<FormControl variant="outlined" className={classes.formControl}>
											<InputLabel>Cluster</InputLabel>
											<Select
												value={values.cluster}
												onChange={handleMultiChangeCluster}
												label="Cluster"
											>
												{props.clustersList.map((item, index) => {
													return (
														<MenuItem key={item.label} value={item}>{item.label}</MenuItem>
													)
												})}
											</Select>
										</FormControl>
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
									<Grid item xs={10} sm={5}>
										<Button onClick={handleSubmit(onSubmit)}>Create Course</Button>
									</Grid>
								</Grid>
							</form>
						)
					}
				}}
			/>
		</Paper>
	);
}

function mapStateToProps({ auth }) {
	return {
		user: auth.user
	}
}

export default withReducer('auth', reducer)((connect(mapStateToProps)(CreateCourse)));