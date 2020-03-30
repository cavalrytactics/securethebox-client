import React from 'react';
import { requestSubscription } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import environment from 'graphql/consts/environment';

const subscription = graphql`
	subscription ScoringSubscription {
		countSeconds(upTo: 10)
	}
`;

const variables = {};

export default function Scoring(){

	requestSubscription(
	  environment,
	  {
		subscription,
		variables,
		// optional but recommended:
		onCompleted: (response, errors) => {
			console.log('Response received from server.')
		},
		onError: error => console.error(error),
	  }
	);

	return (
		<div>
			Scoring...
		</div>
	)
}