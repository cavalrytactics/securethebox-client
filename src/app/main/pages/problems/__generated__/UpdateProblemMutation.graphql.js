/**
 * @flow
 * @relayHash 0453d4afb849627a3a56516bd7fe6b69
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProblemMutationVariables = {|
  ID: string,
  value: string,
  label: string,
  instructions: string,
  points: number,
  number: number,
  startDate: string,
  dueDate: string,
  rejectDate: string,
|};
export type UpdateProblemMutationResponse = {|
  +updateProblem: ?{|
    +problem: ?{|
      +value: ?string,
      +label: ?string,
    |}
  |}
|};
export type UpdateProblemMutation = {|
  variables: UpdateProblemMutationVariables,
  response: UpdateProblemMutationResponse,
|};
*/


/*
mutation UpdateProblemMutation(
  $ID: ID!
  $value: String!
  $label: String!
  $instructions: String!
  $points: Int!
  $number: Int!
  $startDate: String!
  $dueDate: String!
  $rejectDate: String!
) {
  updateProblem(problemData: {ID: $ID, value: $value, label: $label, instructions: $instructions, points: $points, number: $number, startDate: $startDate, dueDate: $dueDate, rejectDate: $rejectDate}) {
    problem {
      value
      label
      id
    }
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
  },
  {
    "kind": "LocalArgument",
    "name": "value",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "label",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "instructions",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "points",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "number",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "startDate",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "dueDate",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "rejectDate",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ObjectValue",
    "name": "problemData",
    "fields": [
      {
        "kind": "Variable",
        "name": "ID",
        "variableName": "ID"
      },
      {
        "kind": "Variable",
        "name": "dueDate",
        "variableName": "dueDate"
      },
      {
        "kind": "Variable",
        "name": "instructions",
        "variableName": "instructions"
      },
      {
        "kind": "Variable",
        "name": "label",
        "variableName": "label"
      },
      {
        "kind": "Variable",
        "name": "number",
        "variableName": "number"
      },
      {
        "kind": "Variable",
        "name": "points",
        "variableName": "points"
      },
      {
        "kind": "Variable",
        "name": "rejectDate",
        "variableName": "rejectDate"
      },
      {
        "kind": "Variable",
        "name": "startDate",
        "variableName": "startDate"
      },
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ]
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v3 = {
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
    "name": "UpdateProblemMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProblem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateProblemMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "problem",
            "storageKey": null,
            "args": null,
            "concreteType": "ProblemType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProblemMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateProblem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateProblemMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "problem",
            "storageKey": null,
            "args": null,
            "concreteType": "ProblemType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateProblemMutation",
    "id": null,
    "text": "mutation UpdateProblemMutation(\n  $ID: ID!\n  $value: String!\n  $label: String!\n  $instructions: String!\n  $points: Int!\n  $number: Int!\n  $startDate: String!\n  $dueDate: String!\n  $rejectDate: String!\n) {\n  updateProblem(problemData: {ID: $ID, value: $value, label: $label, instructions: $instructions, points: $points, number: $number, startDate: $startDate, dueDate: $dueDate, rejectDate: $rejectDate}) {\n    problem {\n      value\n      label\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef199cdae3ccd2ac04a1244c092c0385';

module.exports = node;
