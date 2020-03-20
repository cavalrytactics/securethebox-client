/**
 * @flow
 * @relayHash 0e863ce2ccca954531b42b4fb0cee919
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListApplicationsMutationVariables = {|
  ID: string
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
  $ID: ID!
) {
  deleteApplication(ID: $ID) {
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
    "name": "deleteApplication",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ID",
        "variableName": "ID"
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
    "text": "mutation ListApplicationsMutation(\n  $ID: ID!\n) {\n  deleteApplication(ID: $ID) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84593e77cab82ad9175d95b78d11d82c';

module.exports = node;
