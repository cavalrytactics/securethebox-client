/**
 * @flow
 * @relayHash 13d6649b789e9df63ff257b5dab63af0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoryInput = {|
  ID?: ?string,
  label?: ?string,
  value?: ?string,
  color?: ?string,
|};
export type ClusterInput = {|
  ID?: ?string,
  value?: ?string,
  label?: ?string,
  status?: ?string,
|};
export type UpdateCourseMutationVariables = {|
  ID: string,
  title: string,
  description: string,
  category: CategoryInput,
  cluster: ClusterInput,
  startDate: string,
  dueDate: string,
  destroyDate: string,
|};
export type UpdateCourseMutationResponse = {|
  +updateCourse: ?{|
    +course: ?{|
      +ID: string
    |}
  |}
|};
export type UpdateCourseMutation = {|
  variables: UpdateCourseMutationVariables,
  response: UpdateCourseMutationResponse,
|};
*/


/*
mutation UpdateCourseMutation(
  $ID: ID!
  $title: String!
  $description: String!
  $category: CategoryInput!
  $cluster: ClusterInput!
  $startDate: String!
  $dueDate: String!
  $destroyDate: String!
) {
  updateCourse(courseData: {ID: $ID, title: $title, description: $description, startDate: $startDate, dueDate: $dueDate, destroyDate: $destroyDate}, categoryData: $category, clusterData: $cluster) {
    course {
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
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "description",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "category",
    "type": "CategoryInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cluster",
    "type": "ClusterInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "startDate",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "dueDate",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "destroyDate",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "categoryData",
    "variableName": "category"
  },
  {
    "kind": "Variable",
    "name": "clusterData",
    "variableName": "cluster"
  },
  {
    "kind": "ObjectValue",
    "name": "courseData",
    "fields": [
      {
        "kind": "Variable",
        "name": "ID",
        "variableName": "ID"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "destroyDate",
        "variableName": "destroyDate"
      },
      {
        "kind": "Variable",
        "name": "dueDate",
        "variableName": "dueDate"
      },
      {
        "kind": "Variable",
        "name": "startDate",
        "variableName": "startDate"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
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
    "name": "UpdateCourseMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCourseMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "course",
            "storageKey": null,
            "args": null,
            "concreteType": "CourseType",
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
    "name": "UpdateCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCourseMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "course",
            "storageKey": null,
            "args": null,
            "concreteType": "CourseType",
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
    "name": "UpdateCourseMutation",
    "id": null,
    "text": "mutation UpdateCourseMutation(\n  $ID: ID!\n  $title: String!\n  $description: String!\n  $category: CategoryInput!\n  $cluster: ClusterInput!\n  $startDate: String!\n  $dueDate: String!\n  $destroyDate: String!\n) {\n  updateCourse(courseData: {ID: $ID, title: $title, description: $description, startDate: $startDate, dueDate: $dueDate, destroyDate: $destroyDate}, categoryData: $category, clusterData: $cluster) {\n    course {\n      ID\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '27e227a3f8326a5a125ed5c0fc1d304b';

module.exports = node;
