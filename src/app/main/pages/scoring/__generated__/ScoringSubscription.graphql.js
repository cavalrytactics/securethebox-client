/**
 * @flow
 * @relayHash 2d65928d478bba9cf6e097b21f39d953
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
  countSeconds(upTo: 10)
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
        "value": 10
      }
    ],
    "storageKey": "countSeconds(upTo:10)"
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
    "text": "subscription ScoringSubscription {\n  countSeconds(upTo: 10)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4158fe5df67422b1cea15ef7d88549de';

module.exports = node;
