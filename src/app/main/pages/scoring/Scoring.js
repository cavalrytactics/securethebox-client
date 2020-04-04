import React, { useState } from 'react';
import { requestSubscription } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'graphql/consts/environment';

const subscription = graphql`
	subscription ScoringSubscription {
		streamTest{
			service
			timestamp
			result
		}
	}
`;

const variables = {};

export default function Scoring(){

	const [service, setService] = useState({
		service: ""
	});

	requestSubscription(
	  environment,
	  {
		subscription,
		variables,
		onCompleted: (response, errors) => {
			console.log('Response received from server.')
		},
		onNext: (response, error) => {
			console.log('Response received from server.', response.streamTest)
			if (service.service !== response.streamTest.service && service.service !== ""){
				setService(response.streamTest)
			}
		},
		onError: error => console.error(error),
	  }
	);

	return (
		<div>
			Scoring...{service.service}
		</div>
	)
}