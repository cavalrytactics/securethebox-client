import React, { useState, useEffect } from 'react';
import withReducer from 'app/store/withReducer';
import connect from 'react-redux/es/connect/connect';
import reducer from '../../../auth/store/reducers';
import {
	Environment,
	Network,
	RecordSource,
	Store,
} from 'relay-runtime';
import { QueryRenderer, commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from "react-select";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

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

// Graphql save query to local
const environment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});

// Graphql Query setup
function fetchQuery(
	operation,
	variables,
) {
	return fetch('http://localhost:5000/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: operation.text,
			variables,
		}),
	}).then(response => {
		return response.json();
	});
}

// Graphql Mutation to create Course
const mutation = graphql`
 mutation wizardMutation(
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

function createCourseEvent(environment, data) {
	const variables = data;
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
}

// Wizard form
function Wizard(props) {
	const classes = useStyles();
	const { register, handleSubmit, errors, control, setValue } = useForm(); // initialise the hook

	// Submit request to Grapqhl Server
	const onSubmit = data => {
		data["slug"] = data["title"].split(/\s/).join('-');
		data["totalSteps"] = 0
		createCourseEvent(environment, data)
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
		} else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
			setTime(timerTime + 300000)
		} else if (input === "decMinutes" && timerTime - 60000 >= 0) {
			setTime(timerTime - 300000)
		} else {
			setTime(timerTime)
		}
	}

	var minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2)
	var hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2)

	// React state management for FORM
	React.useEffect(() => {
		register({ name: "category" }); // custom register react-select 
	}, [register])

	React.useEffect(() => {
		register({ name: "cluster" }); // custom register react-select 
	}, [register])

	React.useEffect(() => {
		register({ name: "length" }); // custom register react-select 
	}, [register])

	React.useEffect(() => {
		register({ name: "slug" }); // custom register react-select 
	}, [register])

	React.useEffect(() => {
		register({ name: "totalSteps" }); // custom register react-select 
	}, [register])

	useEffect(() => {
		setValue("length", timerTime)
	})

	return (
		<div>
			{/* This is React 'Relay' used to render data from graphql */}
			<QueryRenderer
				environment={environment}
				query={graphql`
				query wizardQuery {
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
							<Paper className={classes.paper}>
								<form>
									< Grid container spacing={3} >
										<Grid item xs={12}>
											<Controller as={TextField} fullWidth variant="outlined" control={control} defaultValue="" inputRef={register({ required: true })} label="Title" name="title" />
											<p>
												{errors.title && 'Title is required.'}
											</p>
										</Grid>
										<Grid item xs={12}>
											<Controller as={TextField} fullWidth variant="outlined" control={control} defaultValue="" inputRef={register({ required: true })} label="Description" name="description" />
											<p>
												{errors.description && 'Description is required.'}
											</p>
										</Grid>
										<Grid item xs={12} sm={3}>
											<span>Select Category</span>
											<Select
												value={valuesCategory.selectedOptionCategory}
												options={props.categoriesList}
												onChange={handleMultiChangeCategory}
											/>
										</Grid>
										<Grid item xs={12} sm={3}>
											<span>Select Cluster</span>
											<Select
												value={valuesCluster.selectedOptionCluster}
												options={props.clustersList}
												onChange={handleMultiChangeCluster}
											/>
										</Grid>
										<Grid item xs={12} sm={3}>
											<div className="ChallengeLength">
												<div className="ChallengeLength-header">Challenge Length</div>
												<div className="ChallengeLength-time">
													{hours} hour(s) : {minutes} minute(s)
												</div>
												<div className="ChallengeLength-display">
													<Button onClick={() => adjustTimer("incHours")}><ArrowUpward /></Button>
													<Button onClick={() => adjustTimer("incMinutes")}><ArrowUpward /></Button>
													<Button onClick={() => adjustTimer("decHours")}><ArrowDownward /></Button>
													<Button onClick={() => adjustTimer("decMinutes")}><ArrowDownward /></Button>
												</div>
											</div>
										</Grid>
										<Grid item xs={12} sm={3}>
											<Button onClick={handleSubmit(onSubmit)}>Submit</Button>
										</Grid>
									</Grid>
								</form>
							</Paper>

						)
					}
				}}
			/>
		</div>
	);
}

function mapStateToProps({ auth }) {
	return {
		user: auth.user
	}
}

export default withReducer('auth', reducer)((connect(mapStateToProps)(Wizard)));
