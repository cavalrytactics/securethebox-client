import {
	Environment,
	Network,
	RecordSource,
	Store,
} from 'relay-runtime';
import fetchQuery from '../functions/fetchQuery'
import 'regenerator-runtime/runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws'

const wsUrl = 'ws://localhost:8000/subscriptions'
const client = new SubscriptionClient(wsUrl, { lazy: true, reconnect: true });

const subscribeFn = (operation, variables) => {
  const query = operation.text;
  if (!query) return;
  const request = client.request({ query, variables });
  return {
    subscribe: observer => {
      const subscription = request.subscribe(observer);
      observer.start(subscription);
    },
  };
}

// Graphql save query to local
export const environment = new Environment({
	network: Network.create(fetchQuery,subscribeFn),
	store: new Store(new RecordSource()),
});

export default environment