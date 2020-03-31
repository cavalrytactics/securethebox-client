/**
 * @flow
 * @relayHash ac7dcef61d5d2883959f8ad23ae2322d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ScoringSubscriptionVariables = {||};
export type ScoringSubscriptionResponse = {|
  +countSeconds: ?number
|};
export type ScoringSubscription = {|
  variables: ScoringSubscriptionVariables,
  response: ScoringSubscriptionResponse,
|};
*/


/*
subscription ScoringSubscription {
  countSeconds(upTo: 200)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "countSeconds",
    "args": [
      {
        "kind": "Literal",
        "name": "upTo",
        "value": 200
      }
    ],
    "storageKey": "countSeconds(upTo:200)"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ScoringSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ScoringSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "ScoringSubscription",
    "id": null,
    "text": "subscription ScoringSubscription {\n  countSeconds(upTo: 200)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9656da9d3b371767a5e6f714b516c3aa';

module.exports = node;
