/**
 * @flow
 * @relayHash 1c276d5b0fe8e352887688bbc8a7fdc5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListCoursesQueryVariables = {||};
export type ListCoursesQueryResponse = {|
  +coursesList: ?$ReadOnlyArray<?{|
    +ID: string,
    +activeStep: ?number,
    +cluster: ?{|
      +label: ?string,
      +value: ?string,
      +status: ?string,
    |},
    +category: ?{|
      +label: ?string,
      +value: ?string,
    |},
    +slug: ?string,
    +length: ?number,
    +title: ?string,
    +totalSteps: ?number,
  |}>
|};
export type ListCoursesQuery = {|
  variables: ListCoursesQueryVariables,
  response: ListCoursesQueryResponse,
|};
*/


/*
query ListCoursesQuery {
  coursesList {
    ID
    activeStep
    cluster {
      label
      value
      status
      id
    }
    category {
      label
      value
      id
    }
    slug
    length
    title
    totalSteps
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
  "name": "activeStep",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "length",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalSteps",
  "args": null,
  "storageKey": null
},
v9 = {
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
    "name": "ListCoursesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "coursesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CourseType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cluster",
            "storageKey": null,
            "args": null,
            "concreteType": "ClusterType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
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
    "name": "ListCoursesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "coursesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CourseType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cluster",
            "storageKey": null,
            "args": null,
            "concreteType": "ClusterType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v9/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v9/*: any*/)
            ]
          },
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ListCoursesQuery",
    "id": null,
    "text": "query ListCoursesQuery {\n  coursesList {\n    ID\n    activeStep\n    cluster {\n      label\n      value\n      status\n      id\n    }\n    category {\n      label\n      value\n      id\n    }\n    slug\n    length\n    title\n    totalSteps\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c777dc5f072f986b8ec45e128c1c6d16';

module.exports = node;
