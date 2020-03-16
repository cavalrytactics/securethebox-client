/**
 * @flow
 * @relayHash 06a01ee0c2164adb9b1e85ecfa2c792b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListApplicationsMutationVariables = {|
  id: string
|};
export type ListApplicationsMutationResponse = {|
  +deleteApplication: ?{|
    +success: ?boolean
  |}
|};
export type ListApplicationsMutation = {|
  variables: ListApplicationsMutationVariables,
  response: ListApplicationsMutationResponse,
|};
*/


/*
mutation ListApplicationsMutation(
  $id: ID!
) {
  deleteApplication(id: $id) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteApplication",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "DeleteApplicationMutation",
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
    "name": "ListApplicationsMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListApplicationsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ListApplicationsMutation",
    "id": null,
    "text": "mutation ListApplicationsMutation(\n  $id: ID!\n) {\n  deleteApplication(id: $id) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '40a31fd0f318525063af364113b984cb';

module.exports = node;
