/**
 * @flow
 * @relayHash be2f54a55aefa9a0cadfe1c6ea1cad75
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ViewSubmissionQueryVariables = {|
  ID: string
|};
export type ViewSubmissionQueryResponse = {|
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
export type ViewSubmissionQuery = {|
  variables: ViewSubmissionQueryVariables,
  response: ViewSubmissionQueryResponse,
|};
*/


/*
query ViewSubmissionQuery(
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
    "name": "ViewSubmissionQuery",
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
    "name": "ViewSubmissionQuery",
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
    "name": "ViewSubmissionQuery",
    "id": null,
    "text": "query ViewSubmissionQuery(\n  $ID: ID!\n) {\n  submission(ID: $ID) {\n    ID\n    author\n    verdict\n    creationTime\n    relativeTime\n    points\n    content\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '73b40a9dc35865e3d7216855a51a77bd';

module.exports = node;
