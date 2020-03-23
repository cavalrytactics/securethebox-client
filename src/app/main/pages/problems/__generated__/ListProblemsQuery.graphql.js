/**
 * @flow
 * @relayHash 8bc3213901e065d7bb08e756204d8c8e
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
    +number: ?number,
    +points: ?number,
    +startDate: ?string,
    +dueDate: ?string,
    +rejectDate: ?string,
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
    number
    points
    startDate
    dueDate
    rejectDate
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "number",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "points",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dueDate",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rejectDate",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
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
    "text": "query ListProblemsQuery {\n  problemsList {\n    ID\n    value\n    label\n    number\n    points\n    startDate\n    dueDate\n    rejectDate\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c6fedc5b2c99657c48fcc46f2f9c5f48';

module.exports = node;
