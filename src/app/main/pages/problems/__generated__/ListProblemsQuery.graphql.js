/**
 * @flow
 * @relayHash eb101e1107b571cbf1c536cb165657b4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListProblemsQueryVariables = {||};
export type ListProblemsQueryResponse = {|
  +problemsList: ?$ReadOnlyArray<?{|
    +ID: string,
    +value: ?string,
    +label: ?string,
  |}>
|};
export type ListProblemsQuery = {|
  variables: ListProblemsQueryVariables,
  response: ListProblemsQueryResponse,
|};
*/


/*
query ListProblemsQuery {
  problemsList {
    ID
    value
    label
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ID",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListProblemsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "problemsList",
        "storageKey": null,
        "args": null,
        "concreteType": "ProblemType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListProblemsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "problemsList",
        "storageKey": null,
        "args": null,
        "concreteType": "ProblemType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ListProblemsQuery",
    "id": null,
    "text": "query ListProblemsQuery {\n  problemsList {\n    ID\n    value\n    label\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a3a52ed7888362630f00e48455768e2a';

module.exports = node;
