/**
 * @flow
 * @relayHash 08b7632df3c8390b257dd93bcbe2b67c
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
  id?: ?string,
  value?: ?string,
  label?: ?string,
  status?: ?string,
|};
export type CreateCourseMutationVariables = {|
  title: string,
  description: string,
  category: CategoryInput,
  cluster: ClusterInput,
  startDate: string,
  dueDate: string,
  destroyDate: string,
|};
export type CreateCourseMutationResponse = {|
  +createCourse: ?{|
    +course: ?{|
      +ID: string,
      +title: ?string,
      +description: ?string,
      +startDate: ?string,
      +dueDate: ?string,
      +destroyDate: ?string,
    |}
  |}
|};
export type CreateCourseMutation = {|
  variables: CreateCourseMutationVariables,
  response: CreateCourseMutationResponse,
|};
*/


/*
mutation CreateCourseMutation(
  $title: String!
  $description: String!
  $category: CategoryInput!
  $cluster: ClusterInput!
  $startDate: String!
  $dueDate: String!
  $destroyDate: String!
) {
  createCourse(courseData: {title: $title, description: $description, startDate: $startDate, dueDate: $dueDate, destroyDate: $destroyDate}, categoryData: $category, clusterData: $cluster) {
    course {
      ID
      title
      description
      startDate
      dueDate
      destroyDate
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dueDate",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "destroyDate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCourseMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCourseMutation",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCourseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCourse",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCourseMutation",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
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
    "name": "CreateCourseMutation",
    "id": null,
    "text": "mutation CreateCourseMutation(\n  $title: String!\n  $description: String!\n  $category: CategoryInput!\n  $cluster: ClusterInput!\n  $startDate: String!\n  $dueDate: String!\n  $destroyDate: String!\n) {\n  createCourse(courseData: {title: $title, description: $description, startDate: $startDate, dueDate: $dueDate, destroyDate: $destroyDate}, categoryData: $category, clusterData: $cluster) {\n    course {\n      ID\n      title\n      description\n      startDate\n      dueDate\n      destroyDate\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fd83aac18427632cfe1beb0c05418a0f';

module.exports = node;
