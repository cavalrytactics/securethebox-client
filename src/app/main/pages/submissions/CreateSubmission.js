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
import environment from 'graphql/consts/environment';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
	},
	formControl: {
		minWidth: 120,
	},
}));

// Graphql Mutation 
const mutation = graphql`
	mutation CreateSubmissionMutation(
		$author: String!, 
		$creationTime: String!,
		$content: String!
		) {
		createSubmission(
			submissionData: {
				author: $author,
				creationTime: $creationTime,
				content: $content,
				},
			) {
			submission {
				author
				creationTime
				content
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
function CreateSubmission(props) {
	console.log(props)
	// styling
	const classes = useStyles();
	const { register, handleSubmit, errors } = useForm(); // initialise the hook

	// local state management 
	const [values, setValues] = useState({
		ID: '',
		author: props.user.data.email,
		verdict: 'pass',
		creationTime: new Date(),
		content: ''
	});
	const [selectedTab, setSelectedTab] = React.useState("write");

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	function handleChangeContent(value) {
		setValues({ ...values, "content": value });
	}

	const handleMultiChangeVerdict = event => {
		setValues({ ...values, "verdict": event.target.value });
	}

	// react-hook-form local state
	// Submit request to Graphql Server
	const onSubmit = data => {
		// javascript is wierd... 'data' has some type issues
		const variables = values
		commitMutationRequest(environment, mutation, variables)
};

return (
	<Paper className={classes.paper}>
		{/* This is React 'Relay' used to query and render graphql data */}
		<QueryRenderer
			environment={environment}
			query={graphql`
				query CreateSubmissionQuery{
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
								<Grid item xs={10} sm={3}>
									<TextField
										label="Author"
										name="author"
										value={values.author}
										disabled={true}
										onChange={handleChange('author')}
										inputRef={register({ required: true })}
										InputLabelProps={{
											shrink: true,
										}}
										variant="outlined"
									/>
									<p>
										{errors.author && 'Author is required.'}
									</p>
								</Grid>
								<Grid item xs={10} sm={3}>
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
								<Grid item xs={10} sm={3}>
									<Button className={classes.button} onClick={handleSubmit(onSubmit)}>Create Submission</Button>
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

export default withReducer('auth', reducer)((connect(mapStateToProps)(CreateSubmission)));