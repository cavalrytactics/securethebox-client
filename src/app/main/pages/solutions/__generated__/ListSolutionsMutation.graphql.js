/**
 * @flow
 * @relayHash 0c657a377ad1193406cd4266de26a56c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListSolutionsMutationVariables = {|
  ID: string
|};
export type ListSolutionsMutationResponse = {|
  +deleteSolution: ?{|
    +success: ?boolean
  |}
|};
export type ListSolutionsMutation = {|
  variables: ListSolutionsMutationVariables,
  response: ListSolutionsMutationResponse,
|};
*/


/*
mutation ListSolutionsMutation(
  $ID: ID!
) {
  deleteSolution(ID: $ID) {
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
    "name": "deleteSolution",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ID",
        "variableName": "ID"
      }
    ],
    "concreteType": "DeleteSolutionMutation",
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
    "name": "ListSolutionsMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListSolutionsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ListSolutionsMutation",
    "id": null,
    "text": "mutation ListSolutionsMutation(\n  $ID: ID!\n) {\n  deleteSolution(ID: $ID) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e7320815a885b0fd0c9737d28397424';

module.exports = node;
