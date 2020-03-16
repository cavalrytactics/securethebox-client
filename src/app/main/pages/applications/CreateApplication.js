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
import Select from "react-select"
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
	mutation CreateApplicationMutation(
		$value: String!, 
		$label: String!, 
		$version: String,
		$vulnerability: VulnerabilityInput!
		) {
		createApplication(
			applicationData: {
				value: $value,
				label: $label,
				version: $version,
				},
            vulnerabilityData: $vulnerability
			) {
			application {
				value
				label
				version
			}
		}
	} 
`;

// Wizard form
function CreateApplication(props) {
	// styling
	const classes = useStyles();
	const { register, handleSubmit, errors, setValue } = useForm(); // initialise the hook

	// react-hook-form local state
	// Submit request to Grapqhl Server
	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = data
		variables["value"] = variables["label"]
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
		
		// variables["vulnerability"].forEach(function (arrayItem) {
		// 	// const modifiedVariables = variables
		// 	// modifiedVariables["value"] = modifiedVariables["label"]
		// 	// modifiedVariables["vulnerability"] = arrayItem
		// 	// console.log(variables)
		// 	const mVariables = {
		// 		"value": variables["label"].toLowerCase(),
		// 		"label": variables["label"],
		// 		"version": variables["version"],
		// 		"vulnerability": arrayItem
		// 	}
		// 	console.log(mVariables)
		// 	commitMutation(
		// 		environment,
		// 		{
		// 			mutation,
		// 			mVariables,
		// 			onCompleted: (response, errors) => {
		// 				console.log('Response received from server.')
		// 			},
		// 			onError: err => console.error(err),
		// 		},
		// 	)
		// })
		
	};

	// local state management 
	const [valuesVulnerability, setReactSelectValueVulnerability] = useState({ selectedOptionVulnerability: [] });

	const handleMultiChangeVulnerability = selectedOptionVulnerability => {
		setValue("vulnerability", selectedOptionVulnerability);
		setReactSelectValueVulnerability({ selectedOptionVulnerability });
	}

	// React state management for FORM
	React.useEffect(() => {
		register({ name: "vulnerability" }); // USE key = 'name' for react-select 
	}, [register])

	React.useEffect(() => {
		register({ value: "version" }); // USE key = 'name' for INPUT values
	}, [register])

	React.useEffect(() => {
		register({ value: "label" }); // USE key = 'name' for INPUT values
	}, [register])

	React.useEffect(() => {
		register({ name: "value" }); // USE key = 'name' for INPUT values
	}, [register])

	return (
		<Paper className={classes.paper}>
			{/* This is React 'Relay' used to query and render graphql data */}
			<QueryRenderer
				environment={environment}
				query={graphql`
				query CreateApplicationQuery{
					vulnerabilitiesList{
						value
						label
						type
						exploitDbUrl
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
										<TextField inputRef={register({ required: true })} fullWidth variant="outlined" label="Label" name="label" />
										<p>
											{errors.label && 'Label is required.'}
										</p>
									</Grid>
									<Grid item xs={12}>
										<TextField inputRef={register({ required: true })} fullWidth variant="outlined" label="Version" name="version" />
										<p>
											{errors.version && 'Version is required.'}
										</p>
									</Grid>
									<Grid item xs={12}>
										<span>Select Vulnerabilities</span>
										<Select
											value={valuesVulnerability.selectedOptionVulnerability}
											options={props.vulnerabilitiesList}
											onChange={handleMultiChangeVulnerability}
										/>
									</Grid>
									<Grid item xs={12} sm={3}>
										<Button onClick={handleSubmit(onSubmit)}>Create Application</Button>
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

export default withReducer('auth', reducer)((connect(mapStateToProps)(CreateApplication)));