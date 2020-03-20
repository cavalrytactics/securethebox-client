/**
 * @flow
 * @relayHash 43429428c536952fe981de25d536814e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProblemMutationVariables = {|
  value: string,
  label: string,
|};
export type CreateProblemMutationResponse = {|
  +createProblem: ?{|
    +problem: ?{|
      +value: ?string,
      +label: ?string,
    |}
  |}
|};
export type CreateProblemMutation = {|
  variables: CreateProblemMutationVariables,
  response: CreateProblemMutationResponse,
|};
*/


/*
mutation CreateProblemMutation(
  $value: String!
  $label: String!
) {
  createProblem(problemData: {value: $value, label: $label}) {
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
    "name": "value",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "label",
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
        "name": "label",
        "variableName": "label"
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
    "name": "CreateProblemMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProblem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProblemMutation",
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
    "name": "CreateProblemMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProblem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProblemMutation",
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
    "name": "CreateProblemMutation",
    "id": null,
    "text": "mutation CreateProblemMutation(\n  $value: String!\n  $label: String!\n) {\n  createProblem(problemData: {value: $value, label: $label}) {\n    problem {\n      value\n      label\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6f14130c0b18835767d60bebbe0965d';

module.exports = node;
