/**
 * @flow
 * @relayHash 0a8699bf1a45ba7af70fa107e96d3abe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ScoringSubscriptionVariables = {||};
export type ScoringSubscriptionResponse = {|
  +streamTest: ?{|
    +service: ?string,
    +timestamp: ?any,
    +result: ?string,
  |}
|};
export type ScoringSubscription = {|
  variables: ScoringSubscriptionVariables,
  response: ScoringSubscriptionResponse,
|};
*/


/*
subscription ScoringSubscription {
  streamTest {
    service
    timestamp
    result
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "streamTest",
    "storageKey": null,
    "args": null,
    "concreteType": "ScoringType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "service",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "timestamp",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "result",
        "args": null,
        "storageKey": null
      }
    ]
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
    "text": "subscription ScoringSubscription {\n  streamTest {\n    service\n    timestamp\n    result\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '173a086923ccbc2389cfb90cc58ec9eb';

module.exports = node;
