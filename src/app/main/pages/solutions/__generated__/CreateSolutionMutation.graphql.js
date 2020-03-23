/**
 * @flow
 * @relayHash 908153a76e2b09794bea51bf6112b093
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSolutionMutationVariables = {|
  value: string,
  label: string,
|};
export type CreateSolutionMutationResponse = {|
  +createSolution: ?{|
    +solution: ?{|
      +value: ?string,
      +label: ?string,
    |}
  |}
|};
export type CreateSolutionMutation = {|
  variables: CreateSolutionMutationVariables,
  response: CreateSolutionMutationResponse,
|};
*/


/*
mutation CreateSolutionMutation(
  $value: String!
  $label: String!
) {
  createSolution(solutionData: {value: $value, label: $label}) {
    solution {
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
    "name": "solutionData",
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
    "name": "CreateSolutionMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSolution",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSolutionMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "solution",
            "storageKey": null,
            "args": null,
            "concreteType": "SolutionType",
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
    "name": "CreateSolutionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSolution",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSolutionMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "solution",
            "storageKey": null,
            "args": null,
            "concreteType": "SolutionType",
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
    "name": "CreateSolutionMutation",
    "id": null,
    "text": "mutation CreateSolutionMutation(\n  $value: String!\n  $label: String!\n) {\n  createSolution(solutionData: {value: $value, label: $label}) {\n    solution {\n      value\n      label\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b3cc2645390da972f4c5feb117d895e0';

module.exports = node;
