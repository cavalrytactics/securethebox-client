/**
 * @flow
 * @relayHash 46957718a095a77c043e943d2e045932
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListCoursesMutationVariables = {|
  ID: string
|};
export type ListCoursesMutationResponse = {|
  +deleteCourse: ?{|
    +success: ?boolean
  |}
|};
export type ListCoursesMutation = {|
  variables: ListCoursesMutationVariables,
  response: ListCoursesMutationResponse,
|};
*/


/*
mutation ListCoursesMutation(
  $ID: ID!
) {
  deleteCourse(ID: $ID) {
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
    "name": "deleteCourse",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ID",
        "variableName": "ID"
      }
    ],
    "concreteType": "DeleteCourseMutation",
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
    "name": "ListCoursesMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListCoursesMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ListCoursesMutation",
    "id": null,
    "text": "mutation ListCoursesMutation(\n  $ID: ID!\n) {\n  deleteCourse(ID: $ID) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e21314dbed512abaf292dd44f56934e7';

module.exports = node;
