/**
 * @flow
 * @relayHash 257748fe4af9f3af3051bc03502e63cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ViewCourseQueryVariables = {|
  ID: string
|};
export type ViewCourseQueryResponse = {|
  +course: ?{|
    +ID: string,
    +title: ?string,
    +description: ?string,
    +startDate: ?string,
    +dueDate: ?string,
    +destroyDate: ?string,
    +category: ?{|
      +label: ?string,
      +value: ?string,
      +color: ?string,
    |},
    +cluster: ?{|
      +label: ?string,
      +value: ?string,
      +status: ?string,
    |},
  |}
|};
export type ViewCourseQuery = {|
  variables: ViewCourseQueryVariables,
  response: ViewCourseQueryResponse,
|};
*/


/*
query ViewCourseQuery(
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
      label
      value
      color
      id
    }
    cluster {
      label
      value
      status
      id
    }
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
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "color",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewCourseQuery",
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
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cluster",
            "storageKey": null,
            "args": null,
            "concreteType": "ClusterType",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v11/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewCourseQuery",
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
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v12/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cluster",
            "storageKey": null,
            "args": null,
            "concreteType": "ClusterType",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ]
          },
          (v12/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ViewCourseQuery",
    "id": null,
    "text": "query ViewCourseQuery(\n  $ID: ID!\n) {\n  course(ID: $ID) {\n    ID\n    title\n    description\n    startDate\n    dueDate\n    destroyDate\n    category {\n      label\n      value\n      color\n      id\n    }\n    cluster {\n      label\n      value\n      status\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '90ef0226311ba69edcb17930e552c66f';

module.exports = node;
