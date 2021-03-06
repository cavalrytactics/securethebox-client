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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker } from "@material-ui/pickers";
import environment from 'graphql/consts/environment';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
	tables: true,
	simplifiedAutoLink: true,
	strikethrough: true,
	tasklists: true,
});

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
	mutation CreateProblemMutation(
		$value: String!, 
		$label: String!, 
		$instructions: String!,
		$points: Int!,
		$number: Int!,
		$startDate: String!,
		$dueDate: String!,
		$rejectDate: String!,
		) {
		createProblem(
			problemData: {
				value: $value,
				label: $label,
				instructions: $instructions,
				points: $points,
				number: $number,
				startDate: $startDate,
				dueDate: $dueDate,
				rejectDate: $rejectDate
				},
			) {
			problem {
				value
				label
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

// Wizard form
function CreateProblem(props) {
	// styling
	const classes = useStyles();
	const { register, handleSubmit, errors } = useForm(); // initialise the hook
	// local state management 

	const [values, setValues] = useState({
		ID: '',
		value: '',
		label: '',
		dueDate: new Date(),
		startDate: new Date(),
		rejectDate: new Date(),
		points: '',
		number: '',
		instructions: `
<!-- Please provide a clear and concise instructions -->

## Deliverables 
- some item
<!-- code example: \`some code\`->

<!-- link example: [some link](https://www.securethebox.us) -->
		`
	});
	const [selectedTab, setSelectedTab] = React.useState("write");
	
	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};
	function handleChangeInstructions(value) {
		setValues({ ...values, "instructions": value });
	}
	function handleChangeStartDate(value) {
		setValues({ ...values, "startDate": value })
	}
	function handleChangeDueDate(value) {
		setValues({ ...values, "dueDate": value })
	}
	function handleChangeRejectDate(value) {
		setValues({ ...values, "rejectDate": value })
	}
	
	// react-hook-form local state
	// Submit request to Graphql Server
	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = data
		variables["value"] = variables["label"].split(/\s/).join('-').toLowerCase()
		variables["instructions"] = values.instructions
		commitMutationRequest(environment, mutation, variables)
	};

	return (
		<Paper className={classes.paper}>
			{/* This is React 'Relay' used to query and render graphql data */}
			<QueryRenderer
				environment={environment}
				query={graphql`
				query CreateProblemQuery{
					vulnerabilitiesList{
						ID
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
								<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" >
									<Grid item xs={10} sm={2}>
										<TextField
											label="Problem Number"
											name="number"
											value={values.number}
											onChange={handleChange('number')}
											type="number"
											inputRef={register({ required: true })}
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
										<p>
											{errors.number && 'Number is required.'}
										</p>
									</Grid>
									<Grid item xs={12} sm={8}>
										<TextField
											inputRef={register({ required: true })}
											fullWidth
											onChange={handleChange('label')}
											variant="outlined"
											label="Title"
											value={values.label}
											name="label" />

										<p>
											{errors.label && 'Title is required.'}
										</p>
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
											label="Reject Date and Time"
											name="rejectDate"
											format="YYYY-MM-DDTHH:mm"
											inputVariant="outlined"
											inputRef={register({ required: true })}
											value={values.rejectDate}
											onChange={handleChangeRejectDate}
											disablePast
											showTodayButton
										/>
									</Grid>
									<Grid item xs={10}>
										<ReactMde
											style={{ textAlign: "left" }}
											value={values.instructions}
											name="instructions"
											inputRef={register}
											onChange={handleChangeInstructions}
											selectedTab={selectedTab}
											onTabChange={setSelectedTab}
											generateMarkdownPreview={markdown =>
												Promise.resolve(converter.makeHtml(markdown))
											}
										/>
										<a href="https://guides.github.com/features/mastering-markdown/">This supports Markdown</a>
									</Grid>
									<Grid item xs={12} sm={3}>
										<TextField
											label="Max Points Possible value"
											value={values.points}
											name="points"
											onChange={handleChange('points')}
											type="number"
											inputRef={register({ required: true })}
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
										<p>
											{errors.points && 'Points is required.'}
										</p>
									</Grid>
									<Grid item xs={12} sm={3}>
										<Button className={classes.button} onClick={handleSubmit(onSubmit)}>Create Problem</Button>
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

export default withReducer('auth', reducer)((connect(mapStateToProps)(CreateProblem)));