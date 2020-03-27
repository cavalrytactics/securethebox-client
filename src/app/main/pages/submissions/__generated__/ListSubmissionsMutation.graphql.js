/**
 * @flow
 * @relayHash 0ce0065780125ff201d5f88688d5c4a1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListSubmissionsMutationVariables = {|
  ID: string
|};
export type ListSubmissionsMutationResponse = {|
  +deleteSubmission: ?{|
    +success: ?boolean
  |}
|};
export type ListSubmissionsMutation = {|
  variables: ListSubmissionsMutationVariables,
  response: ListSubmissionsMutationResponse,
|};
*/


/*
mutation ListSubmissionsMutation(
  $ID: ID!
) {
  deleteSubmission(ID: $ID) {
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
    "name": "deleteSubmission",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ID",
        "variableName": "ID"
      }
    ],
    "concreteType": "DeleteSubmissionMutation",
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
    "name": "ListSubmissionsMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListSubmissionsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ListSubmissionsMutation",
    "id": null,
    "text": "mutation ListSubmissionsMutation(\n  $ID: ID!\n) {\n  deleteSubmission(ID: $ID) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a361570221ae432a2e45f269d754e7dc';

module.exports = node;
