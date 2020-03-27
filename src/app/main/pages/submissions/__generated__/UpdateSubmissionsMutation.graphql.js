/**
 * @flow
 * @relayHash 2a8da3949cdf3dfefa5824fceacd8ea8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateSubmissionsMutationVariables = {|
  ID: string,
  author: string,
  verdict: string,
  creationTime?: ?string,
  relativeTime?: ?string,
  points: number,
  content: string,
|};
export type UpdateSubmissionsMutationResponse = {|
  +updateSubmission: ?{|
    +submission: ?{|
      +ID: string
    |}
  |}
|};
export type UpdateSubmissionsMutation = {|
  variables: UpdateSubmissionsMutationVariables,
  response: UpdateSubmissionsMutationResponse,
|};
*/


/*
mutation UpdateSubmissionsMutation(
  $ID: ID!
  $author: String!
  $verdict: String!
  $creationTime: String
  $relativeTime: String
  $points: Int!
  $content: String!
) {
  updateSubmission(submissionData: {ID: $ID, author: $author, verdict: $verdict, creationTime: $creationTime, relativeTime: $relativeTime, points: $points, content: $content}) {
    submission {
      ID
      id
    }
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
  },
  {
    "kind": "LocalArgument",
    "name": "author",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "verdict",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "creationTime",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "relativeTime",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "points",
    "type": "Int!",
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
        "name": "ID",
        "variableName": "ID"
      },
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
      },
      {
        "kind": "Variable",
        "name": "points",
        "variableName": "points"
      },
      {
        "kind": "Variable",
        "name": "relativeTime",
        "variableName": "relativeTime"
      },
      {
        "kind": "Variable",
        "name": "verdict",
        "variableName": "verdict"
      }
    ]
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ID",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSubmissionsMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSubmission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateSubmissionMutation",
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSubmissionsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSubmission",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateSubmissionMutation",
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
    "name": "UpdateSubmissionsMutation",
    "id": null,
    "text": "mutation UpdateSubmissionsMutation(\n  $ID: ID!\n  $author: String!\n  $verdict: String!\n  $creationTime: String\n  $relativeTime: String\n  $points: Int!\n  $content: String!\n) {\n  updateSubmission(submissionData: {ID: $ID, author: $author, verdict: $verdict, creationTime: $creationTime, relativeTime: $relativeTime, points: $points, content: $content}) {\n    submission {\n      ID\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f23a0dea1256efd5e2cef734303bb3cb';

module.exports = node;
