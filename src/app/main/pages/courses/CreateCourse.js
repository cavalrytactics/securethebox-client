import React, { useState, useEffect } from 'react';
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
import Select from "react-select";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import environment from 'graphql/consts/environment';

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
}));

// Graphql Mutation to create Course
const mutation = graphql`
	mutation CreateCourseMutation(
		$title: String!, 
		$description: String!, 
		$length: Int!, 
		$slug: String!, 
		$totalSteps: Int!,
		$category: CategoryInput!,
		$cluster: ClusterInput!
		) {
		createCourse(
			courseData: {
				title: $title, 
				activeStep: 0, 
				description: $description, 
				length: $length, 
				slug: $slug, 
				totalSteps: $totalSteps
				}, 
			categoryData: $category, 
			clusterData: $cluster
			) {
			course {
				title
				activeStep
				description
				length
				slug
				totalSteps
			}
		}
	}
`;

// Wizard form
function CreateCourse(props) {
	// styling
	const classes = useStyles();
	// react-hook-form local state
	const { register, handleSubmit, errors, setValue } = useForm(); // initialise the hook

	// Submit request to Grapqhl Server
	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = data
		variables["slug"] = variables["title"].split(/\s/).join('-').toLowerCase();
		variables["totalSteps"] = 0
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
	const [valuesCategory, setReactSelectValueCategory] = useState({ selectedOptionCategory: [] });
	const [valuesCluster, setReactSelectValueCluster] = useState({ selectedOptionCluster: [] });
	const [timerTime, setTime] = useState(0);

	// Used for 'react-select' drop-down component
	const handleMultiChangeCategory = selectedOptionCategory => {
		setValue("category", selectedOptionCategory);
		setReactSelectValueCategory({ selectedOptionCategory });
	}

	const handleMultiChangeCluster = selectedOptionCluster => {
		setValue("cluster", selectedOptionCluster);
		setReactSelectValueCluster({ selectedOptionCluster });
	}

	function adjustTimer(input) {
		if (input === "incHours" && timerTime + 3600000 < 216000000) {
			setTime(timerTime + 3600000)
		} else if (input === "decHours" && timerTime - 3600000 >= 0) {
			setTime(timerTime - 3600000)
		} else if (input === "incMinutes" && timerTime + 300000 < 216000000) {
			setTime(timerTime + 300000)
		} else if (input === "decMinutes" && timerTime - 300000 >= 0) {
			setTime(timerTime - 300000)
		} else {
			setTime(timerTime)
		}
	}

	var minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2)
	var hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2)

	// React state management for FORM
	React.useEffect(() => {
		register({ name: "category" }) // USE key = 'name' for react-select  
	}, [register])

	React.useEffect(() => {
		register({ name: "cluster" }); // USE key = 'name' for react-select  
	}, [register])

	React.useEffect(() => {
		register({ name: "length" }); // USE key = 'name' INPUT values
	}, [register])

	React.useEffect(() => {
		register({ name: "slug" }); // USE key = 'name' for NON-INPUT value
	}, [register])

	React.useEffect(() => {
		register({ name: "totalSteps" }); // USE key = 'name' for NON-INPUT value
	}, [register])

	useEffect(() => {
		setValue("length", timerTime)
	})

	return (
		<Paper className={classes.paper}>
			{/* This is React 'Relay' used to query and render graphql data */}
			<QueryRenderer
				environment={environment}
				query={graphql`
				query CreateCourseQuery {
					categoriesList {
						value
						label
						color
					}
					clustersList {
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
								< Grid container spacing={3} >
									<Grid item xs={12}>
										<TextField inputRef={register({ required: true })} fullWidth variant="outlined" label="Title" name="title"/>
										<p>
											{errors.title && 'Title is required.'}
										</p>
									</Grid>
									<Grid item xs={12}>
										<TextField inputRef={register({ required: true })} fullWidth variant="outlined" label="Description" name="description"/>
										<p>
											{errors.description && 'Description is required.'}
										</p>
									</Grid>
									<Grid item xs={6} sm={3}>
										<span>Select Category</span>
										<Select
											value={valuesCategory.selectedOptionCategory}
											options={props.categoriesList}
											onChange={handleMultiChangeCategory}
										/>
									</Grid>
									<Grid item xs={6} sm={3}>
										<span>Select Cluster</span>
										<Select
											value={valuesCluster.selectedOptionCluster}
											options={props.clustersList}
											onChange={handleMultiChangeCluster}
										/>
									</Grid>
									<Grid item xs={6} sm={3}>
										<div className="ChallengeLength">
											<div className="ChallengeLength-header">Challenge Length</div>
											<div className="ChallengeLength-time">
												{hours} hour(s) : {minutes} minute(s)
												</div>
											<div className="ChallengeLength-display">
												<Button onClick={() => adjustTimer("incHours")}><ArrowUpward /></Button>
												<Button onClick={() => adjustTimer("decHours")}><ArrowDownward /></Button>
												<Button onClick={() => adjustTimer("incMinutes")}><ArrowUpward /></Button>
												<Button onClick={() => adjustTimer("decMinutes")}><ArrowDownward /></Button>
											</div>
										</div>
									</Grid>
									<Grid item xs={12} sm={3}>
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