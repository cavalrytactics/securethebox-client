import React, { useState } from 'react';
import connect from 'react-redux/es/connect/connect';
import withReducer from 'app/store/withReducer';
import reducer from 'app/auth/store/reducers';
import { fetchQuery } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import environment from 'graphql/consts/environment';
import { useLocation } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown"

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

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function ViewSubmission(props) {
	const location = useLocation();
	const history = useHistory();
	const query = useQuery();
	const classes = useStyles(); // styling
	const { register } = useForm(); // initialise the hook

	// local state management 
	const [values, setValues] = useState({
		ID: '',
		verdict: '',
		creationTime: '',
		relativeTimte: '', 
		points: 0,
		content: ''
	});


	const queryNow = graphql`
	query ViewSubmissionQuery($ID: ID!){
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

	function updateSubmission(ID) {
		history.push({
			pathname: '/submissions/update',
			search: '?ID=' + ID,
			state: { ID: ID }
		})
	}

	if (values.ID !== '' && location.state.ID !== '' && location.state.ID !== undefined && location.state.ID !== null && query.get("ID") !== null) {
		return (
			<Paper className={classes.paper}>
				<form>
					<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" >
						<Hidden xsUp>
							<TextField
								label="ID"
								name="ID"
								value={values.ID}
								inputRef={register({ required: true })}
							/>
						</Hidden>
						<Grid item xs={10}>
							<h2>Content:</h2>
						</Grid>
						<Grid item xs={10}>
							<ReactMarkdown source={values.content}/>
						</Grid>

						<Grid item xs={10} sm={3}>
							<Button className={classes.button} onClick={() => updateSubmission(values.ID)}>Edit Submission</Button>
						</Grid>
					</Grid>
				</form >
			</Paper >
		);
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

export default withReducer('auth', reducer)((connect(mapStateToProps)(ViewSubmission)));