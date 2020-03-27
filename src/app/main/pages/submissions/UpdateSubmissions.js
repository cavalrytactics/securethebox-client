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
import environment from 'graphql/consts/environment';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useLocation } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const converter = new Showdown.Converter({
	tables: true,
	simplifiedAutoLink: true,
	strikethrough: true,
	tasklists: true
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
	mutation UpdateSubmissionsMutation(
		$ID: ID!,
		$author: String!,
		$verdict: String!,
		$creationTime: String,
		$relativeTime: String,
		$points: Int!,
		$content: String!
		) {
		updateSubmission(
			submissionData: {
				ID: $ID,
				author: $author,
				verdict: $verdict,
				creationTime: $creationTime,
				relativeTime: $relativeTime,
				points: $points,
				content: $content
				},
			) {
			submission {
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

function UpdateSubmission(props) {
	const location = useLocation();
	let history = useHistory();
	const query = useQuery();
	const classes = useStyles(); //styling
	const { register, handleSubmit, errors } = useForm(); // initialise the hook

	// local state management 
	const [values, setValues] = useState({
		ID: '',
		points: 0,
		content: ''
	});

	// react-hook-form local state
	const [selectedTab, setSelectedTab] = React.useState("write");

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	function handleChangeContent(value) {
		setValues({ ...values, "content": value });
	}

	const handleMultiChangeVerdict = value => {
		setValues({ ...values, "verdict": value.target.value });
	}
	
	// Submit request to Graphql Server
	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = values
		variables["value"] = variables["label"].split(/\s/).join('-').toLowerCase()
		variables["instructions"] = values.instructions
		console.log("Variables:", variables)
		commitMutationRequest(environment, mutation, variables)
	};
	const queryNow = graphql`
	query UpdateSubmissionsQuery($ID: ID!){
		submission(ID: $ID){
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

	if (values.ID !== '' && location.state.ID !== '' && location.state.ID !== undefined && location.state.ID !== null && query.get("ID") !== null) {
		const queryVariables = { "ID": location.state.ID }
		// This will only make the request to load state once ; this is important
		if (values.ID === '') {
			fetchQuery(environment, queryNow, queryVariables)
				.then(data => {
					setValues(data.submission)
				});
		}
	} else {
		// check if ID is valid
		const queryVariables = { "ID": query.get("ID") }
		// This will only make the request to load state once ; this is important
		if (values.ID === '' && query.get("ID") !== null) {
			fetchQuery(environment, queryNow, queryVariables)
				.then(data => {
					setValues(data.submission)
				});
		}
	}

	function cancelSubmission(ID) {
		history.push({
			pathname: '/submissions/list'
		})
	}

	if (values.ID !== '' && location.state.ID !== '' && location.state.ID !== undefined && location.state.ID !== null && query.get("ID") !== null) {
		return (
			<Paper className={classes.paper}>
				<form>
					<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" >
						<Grid item xs={10} sm={2}>
							<Hidden xsUp>
								<TextField
									label="ID"
									name="ID"
									value={values.ID}
									onChange={handleChange('ID')}
									inputRef={register({ required: true })}
								/>
							</Hidden>
						</Grid>
						<Grid xs={10} sm={3}>
							<TextField
								label="Points"
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
						<Grid item xs={10} sm={3}>
							<FormControl variant="outlined" className={classes.formControl}>
								<InputLabel>Verdict</InputLabel>
								<Select
									value={values.verdict}
									onChange={handleMultiChangeVerdict}
									name="verdict"
									label="Verdict"
								>
									<MenuItem value="pass">PASS</MenuItem>
									<MenuItem value="fail">FAIL</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={10}>
							<ReactMde
								style={{ textAlign: "left" }}
								value={values.content}
								name="content"
								inputRef={register}
								onChange={handleChangeContent}
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
							<Button className={classes.button} onClick={handleSubmit(onSubmit)}>Update Submission</Button>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Button className={classes.button} onClick={() => cancelSubmission()}>Cancel</Button>
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

export default withReducer('auth', reducer)((connect(mapStateToProps)(UpdateSubmission)));