import { commitMutation } from 'react-relay';
// import environment from '../consts/environment'
export function mutationFunction(environment, variables, mutation) {
	// const variables = data;
	// console.log(variables)
	const mutationQuery = mutation;
	commitMutation(
		environment,
		{
			mutationQuery,
			variables,
			onCompleted: (response, errors) => {
				console.log('Response received from server.')
			},
			onError: err => console.error(err),
		},
	);
}

export default mutationFunction