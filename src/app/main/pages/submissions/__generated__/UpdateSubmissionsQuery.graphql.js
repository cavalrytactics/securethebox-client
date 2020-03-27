/**
 * @flow
 * @relayHash 2fd3703f693585d3d09b9dc6184e5ef5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateSubmissionsQueryVariables = {|
  ID: string
|};
export type UpdateSubmissionsQueryResponse = {|
  +submission: ?{|
    +ID: string,
    +author: ?string,
    +verdict: ?string,
    +creationTime: ?string,
    +relativeTime: ?string,
    +points: ?number,
    +content: ?string,
  |}
|};
export type UpdateSubmissionsQuery = {|
  variables: UpdateSubmissionsQueryVariables,
  response: UpdateSubmissionsQueryResponse,
|};
*/


/*
query UpdateSubmissionsQuery(
  $ID: ID!
) {
  submission(ID: $ID) {
    ID
    author
    verdict
    creationTime
    relativeTime
    points
    content
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
  "name": "author",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "verdict",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "creationTime",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relativeTime",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "points",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSubmissionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SubmissionType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSubmissionsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SubmissionType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
    "name": "UpdateSubmissionsQuery",
    "id": null,
    "text": "query UpdateSubmissionsQuery(\n  $ID: ID!\n) {\n  submission(ID: $ID) {\n    ID\n    author\n    verdict\n    creationTime\n    relativeTime\n    points\n    content\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9ef43fa3dd0d5e01c3ca65701e11ade';

module.exports = node;
