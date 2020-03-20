/**
 * @flow
 * @relayHash 0d8218c86f3cc15e13e7b02af24090c4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListProblemsMutationVariables = {|
  ID: string
|};
export type ListProblemsMutationResponse = {|
  +deleteProblem: ?{|
    +success: ?boolean
  |}
|};
export type ListProblemsMutation = {|
  variables: ListProblemsMutationVariables,
  response: ListProblemsMutationResponse,
|};
*/


/*
mutation ListProblemsMutation(
  $ID: ID!
) {
  deleteProblem(ID: $ID) {
    success
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
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProblem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ID",
        "variableName": "ID"
      }
    ],
    "concreteType": "DeleteProblemMutation",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
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
    "name": "ListProblemsMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListProblemsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ListProblemsMutation",
    "id": null,
    "text": "mutation ListProblemsMutation(\n  $ID: ID!\n) {\n  deleteProblem(ID: $ID) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '887f2465f6fe77e81678f742458a3d53';

module.exports = node;
