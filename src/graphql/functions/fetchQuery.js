// Graphql Query setup
export function fetchQuery(
	operation,
	variables,
) {
	return fetch('http://localhost:5000/graphql', {
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

export default fetchQuery