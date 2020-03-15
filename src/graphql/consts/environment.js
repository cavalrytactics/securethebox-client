import {
	Environment,
	Network,
	RecordSource,
	Store,
} from 'relay-runtime';
import fetchQuery from '../functions/fetchQuery'
// Graphql save query to local
export const environment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});

export default environment