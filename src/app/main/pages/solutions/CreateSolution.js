import React, { useState } from 'react';
import connect from 'react-redux/es/connect/connect';
import withReducer from 'app/store/withReducer';
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
	mutation CreateSolutionMutation(
		$value: String!, 
		$label: String!, 
		) {
		createSolution(
			solutionData: {
				value: $value,
				label: $label,
				},
			) {
			solution {
				value
				label
			}
		}
	} 
`;

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

// Wizard form
function CreateSolution(props) {
	// styling
	const classes = useStyles();
	const { register, handleSubmit, errors, setValue } = useForm(); // initialise the hook

	// react-hook-form local state
	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = data
		variables["value"] = variables["label"]
		console.log(variables) 
		variables["vulnerability"].map((arrayItem) => {
			const mVulnerability = arrayItem // All objects need to be set to const
			variables["vulnerability"] = mVulnerability
			commitMutationRequest(environment, mutation, variables)
			return null
			}
		)
	};

	// local state management 
	const [valuesVulnerability, setReactSelectValueVulnerability] = useState({ selectedOptionVulnerability: [] });

	const handleMultiChangeVulnerability = selectedOptionVulnerability => {
		setValue("vulnerability", selectedOptionVulnerability);
		setReactSelectValueVulnerability({ selectedOptionVulnerability });
	}

	// React state management for FORM
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
				query CreateSolutionQuery{
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
										<TextField inputRef={register({ required: true })} fullWidth variant="outlined" label="Value" name="value" />
										<p>
											{errors.value && 'Value is required.'}
										</p>
									</Grid>
									<Grid item xs={12}>
										<span>Select Vulnerabilities</span>
										<Select
											value={valuesVulnerability.selectedOptionVulnerability}
											options={props.vulnerabilitiesList}
											onChange={handleMultiChangeVulnerability}
											isMulti
										/>
									</Grid>
									<Grid item xs={12} sm={3}>
										<Button onClick={handleSubmit(onSubmit)}>Create Solution</Button>
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

export default withReducer('auth', reducer)((connect(mapStateToProps)(CreateSolution)));