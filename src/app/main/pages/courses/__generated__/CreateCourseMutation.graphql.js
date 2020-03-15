/**
 * @flow
 * @relayHash 7d3c41208dca35d5b69e7ab9323831c7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoryInput = {|
  id?: ?string,
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
  length: number,
  slug: string,
  totalSteps: number,
  category: CategoryInput,
  cluster: ClusterInput,
|};
export type CreateCourseMutationResponse = {|
  +createCourse: ?{|
    +course: ?{|
      +title: ?string,
      +activeStep: ?number,
      +description: ?string,
      +length: ?number,
      +slug: ?string,
      +totalSteps: ?number,
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
  $length: Int!
  $slug: String!
  $totalSteps: Int!
  $category: CategoryInput!
  $cluster: ClusterInput!
) {
  createCourse(courseData: {title: $title, activeStep: 0, description: $description, length: $length, slug: $slug, totalSteps: $totalSteps}, categoryData: $category, clusterData: $cluster) {
    course {
      title
      activeStep
      description
      length
      slug
      totalSteps
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
    "name": "length",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "slug",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "totalSteps",
    "type": "Int!",
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
        "kind": "Literal",
        "name": "activeStep",
        "value": 0
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "length",
        "variableName": "length"
      },
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      },
      {
        "kind": "Variable",
        "name": "totalSteps",
        "variableName": "totalSteps"
      }
    ]
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "activeStep",
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
  "name": "length",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalSteps",
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
    "text": "mutation CreateCourseMutation(\n  $title: String!\n  $description: String!\n  $length: Int!\n  $slug: String!\n  $totalSteps: Int!\n  $category: CategoryInput!\n  $cluster: ClusterInput!\n) {\n  createCourse(courseData: {title: $title, activeStep: 0, description: $description, length: $length, slug: $slug, totalSteps: $totalSteps}, categoryData: $category, clusterData: $cluster) {\n    course {\n      title\n      activeStep\n      description\n      length\n      slug\n      totalSteps\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ac2359cdb35bbf8f6437f95e9d1825ad';

module.exports = node;
