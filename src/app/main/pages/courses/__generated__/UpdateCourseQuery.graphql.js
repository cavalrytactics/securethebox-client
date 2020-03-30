/**
 * @flow
 * @relayHash 5940b852de6149fd4ffab0fec81158fa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCourseQueryVariables = {|
  ID: string
|};
export type UpdateCourseQueryResponse = {|
  +course: ?{|
    +ID: string,
    +title: ?string,
    +description: ?string,
    +startDate: ?string,
    +dueDate: ?string,
    +destroyDate: ?string,
    +category: ?{|
      +ID: string,
      +label: ?string,
      +value: ?string,
    |},
    +cluster: ?{|
      +ID: string,
      +label: ?string,
      +value: ?string,
    |},
  |},
  +categoriesList: ?$ReadOnlyArray<?{|
    +ID: string,
    +label: ?string,
    +value: ?string,
  |}>,
  +clustersList: ?$ReadOnlyArray<?{|
    +ID: string,
    +label: ?string,
    +value: ?string,
  |}>,
|};
export type UpdateCourseQuery = {|
  variables: UpdateCourseQueryVariables,
  response: UpdateCourseQueryResponse,
|};
*/


/*
query UpdateCourseQuery(
  $ID: ID!
) {
  course(ID: $ID) {
    ID
    title
    description
    startDate
    dueDate
    destroyDate
    category {
      ID
      label
      value
      id
    }
    cluster {
      ID
      label
      value
      id
    }
    id
  }
  categoriesList {
    ID
    label
    value
    id
  }
  clustersList {
    ID
    label
    value
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
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v10 = [
  (v2/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/)
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v12 = [
  (v2/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v11/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCourseQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "course",
        "storageKey": null,
        "args": (v1/*: any*/),
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
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryType",
            "plural": false,
            "selections": (v10/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cluster",
            "storageKey": null,
            "args": null,
            "concreteType": "ClusterType",
            "plural": false,
            "selections": (v10/*: any*/)
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoriesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryType",
        "plural": true,
        "selections": (v10/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clustersList",
        "storageKey": null,
        "args": null,
        "concreteType": "ClusterType",
        "plural": true,
        "selections": (v10/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCourseQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "course",
        "storageKey": null,
        "args": (v1/*: any*/),
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
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryType",
            "plural": false,
            "selections": (v12/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cluster",
            "storageKey": null,
            "args": null,
            "concreteType": "ClusterType",
            "plural": false,
            "selections": (v12/*: any*/)
          },
          (v11/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoriesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryType",
        "plural": true,
        "selections": (v12/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clustersList",
        "storageKey": null,
        "args": null,
        "concreteType": "ClusterType",
        "plural": true,
        "selections": (v12/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UpdateCourseQuery",
    "id": null,
    "text": "query UpdateCourseQuery(\n  $ID: ID!\n) {\n  course(ID: $ID) {\n    ID\n    title\n    description\n    startDate\n    dueDate\n    destroyDate\n    category {\n      ID\n      label\n      value\n      id\n    }\n    cluster {\n      ID\n      label\n      value\n      id\n    }\n    id\n  }\n  categoriesList {\n    ID\n    label\n    value\n    id\n  }\n  clustersList {\n    ID\n    label\n    value\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '584379a7e26b1aa62db102b96c7e4c97';

module.exports = node;
