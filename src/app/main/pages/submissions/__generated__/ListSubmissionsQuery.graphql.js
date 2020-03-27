/**
 * @flow
 * @relayHash 0c9c3aab602148d8ced67f0255cb1749
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListSubmissionsQueryVariables = {||};
export type ListSubmissionsQueryResponse = {|
  +submissionsList: ?$ReadOnlyArray<?{|
    +ID: string,
    +author: ?string,
    +verdict: ?string,
    +creationTime: ?string,
    +relativeTime: ?string,
    +points: ?number,
    +content: ?string,
  |}>
|};
export type ListSubmissionsQuery = {|
  variables: ListSubmissionsQueryVariables,
  response: ListSubmissionsQueryResponse,
|};
*/


/*
query ListSubmissionsQuery {
  submissionsList {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ID",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "author",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "verdict",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "creationTime",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "relativeTime",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "points",
  "args": null,
  "storageKey": null
},
v6 = {
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
    "name": "ListSubmissionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submissionsList",
        "storageKey": null,
        "args": null,
        "concreteType": "SubmissionType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListSubmissionsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submissionsList",
        "storageKey": null,
        "args": null,
        "concreteType": "SubmissionType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
    "name": "ListSubmissionsQuery",
    "id": null,
    "text": "query ListSubmissionsQuery {\n  submissionsList {\n    ID\n    author\n    verdict\n    creationTime\n    relativeTime\n    points\n    content\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a84f66e6847ec506c36a15c1a41008e4';

module.exports = node;
