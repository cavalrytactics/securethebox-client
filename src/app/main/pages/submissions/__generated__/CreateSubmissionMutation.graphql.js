/**
 * @flow
 * @relayHash fc8622b08248b4c4cf0d9c1f135804f4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSubmissionMutationVariables = {|
  author: string,
  creationTime: string,
  content: string,
|};
export type CreateSubmissionMutationResponse = {|
  +createSubmission: ?{|
    +submission: ?{|
      +author: ?string,
      +creationTime: ?string,
      +content: ?string,
    |}
  |}
|};
export type CreateSubmissionMutation = {|
  variables: CreateSubmissionMutationVariables,
  response: CreateSubmissionMutationResponse,
|};
*/


/*
mutation CreateSubmissionMutation(
  $author: String!
  $creationTime: String!
  $content: String!
) {
  createSubmission(submissionData: {author: $author, creationTime: $creationTime, content: $content}) {
    submission {
      author
      creationTime
      content
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "author",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "creationTime",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ObjectValue",
    "name": "submissionData",
    "fields": [
      {
        "kind": "Variable",
        "name": "author",
        "variableName": "author"
      },
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "creationTime",
        "variableName": "creationTime"
      }
    ]
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "author",
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
  "name": "content",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateSubmissionMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSubmission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSubmissionMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "submission",
            "storageKey": null,
            "args": null,
            "concreteType": "SubmissionType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSubmissionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createSubmission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSubmissionMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "submission",
            "storageKey": null,
            "args": null,
            "concreteType": "SubmissionType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
    "name": "CreateSubmissionMutation",
    "id": null,
    "text": "mutation CreateSubmissionMutation(\n  $author: String!\n  $creationTime: String!\n  $content: String!\n) {\n  createSubmission(submissionData: {author: $author, creationTime: $creationTime, content: $content}) {\n    submission {\n      author\n      creationTime\n      content\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5bf931f54db1d7d0e9dc1babde806131';

module.exports = node;
