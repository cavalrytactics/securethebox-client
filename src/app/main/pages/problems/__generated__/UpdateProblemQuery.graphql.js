/**
 * @flow
 * @relayHash 3597fcc26853d5cceb8268a700e3910a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProblemQueryVariables = {|
  ID: string
|};
export type UpdateProblemQueryResponse = {|
  +problem: ?{|
    +ID: string,
    +number: ?number,
    +label: ?string,
    +value: ?string,
    +points: ?number,
    +instructions: ?string,
    +startDate: ?string,
    +dueDate: ?string,
    +rejectDate: ?string,
  |}
|};
export type UpdateProblemQuery = {|
  variables: UpdateProblemQueryVariables,
  response: UpdateProblemQueryResponse,
|};
*/


/*
query UpdateProblemQuery(
  $ID: ID!
) {
  problem(ID: $ID) {
    ID
    number
    label
    value
    points
    instructions
    startDate
    dueDate
    rejectDate
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "ID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "ID",
    "variableName": "ID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ID",
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
  "name": "label",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "points",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "instructions",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dueDate",
  "args": null,
  "storageKey": null
},
v10 = {
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
    "name": "UpdateProblemQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "problem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProblemType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProblemQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "problem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProblemType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
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
    "name": "UpdateProblemQuery",
    "id": null,
    "text": "query UpdateProblemQuery(\n  $ID: ID!\n) {\n  problem(ID: $ID) {\n    ID\n    number\n    label\n    value\n    points\n    instructions\n    startDate\n    dueDate\n    rejectDate\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c46ca194d1845d5d69bb28c9d6248dd';

module.exports = node;
