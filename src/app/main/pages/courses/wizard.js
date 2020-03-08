import React from 'react';
import withReducer from 'app/store/withReducer';
import connect from 'react-redux/es/connect/connect';
import reducer from '../../../auth/store/reducers';
import {
	Environment,
	Network,
	RecordSource,
	Store,
} from 'relay-runtime';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useForm } from 'react-hook-form';

function fetchQuery(
	operation,
	variables,
) {
	return fetch('https://cloud-run.securethebox.us/graphql', {
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

const environment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});

function Wizard(props) {
	const { register, handleSubmit, errors } = useForm(); // initialise the hook
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="firstname" ref={register} /> {/* register an input */}

				<input name="lastname" ref={register({ required: true })} />
				{errors.lastname && 'Last name is required.'}

				<input name="age" ref={register({ pattern: /\d+/ })} />
				{errors.age && 'Please enter number for age.'}

				<input type="submit" />
			</form>
			<categoriesListGraphql/>
		</div>
		
	);
}

function categoriesListGraphql(props) {

	return (
		<div>
			<QueryRenderer
				environment={environment}
				query={graphql`
				query wizardQuery {
					categoriesList {
						value
						label
						color
					}  
				}
				`}
				variables={{}}
				render={({ error, props }) => {
					if (error) {
						return <div>Error!</div>;
					}
					if (!props) {
						return <div>Loading...</div>;
					}
					if (props) {
						return (
							props.categoriesList.map((v, i) => {
								return <div key={i}>{v.label}</div>
							}))
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
