/**
 * @flow
 * @relayHash 87df0bd14f2716f57d65d84fa205596f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCourseQueryVariables = {||};
export type CreateCourseQueryResponse = {|
  +categoriesList: ?$ReadOnlyArray<?{|
    +value: ?string,
    +label: ?string,
    +color: ?string,
  |}>,
  +clustersList: ?$ReadOnlyArray<?{|
    +value: ?string,
    +label: ?string,
    +status: ?string,
  |}>,
|};
export type CreateCourseQuery = {|
  variables: CreateCourseQueryVariables,
  response: CreateCourseQueryResponse,
|};
*/


/*
query CreateCourseQuery {
  categoriesList {
    value
    label
    color
    id
  }
  clustersList {
    value
    label
    status
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "color",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "CreateCourseQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoriesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clustersList",
        "storageKey": null,
        "args": null,
        "concreteType": "ClusterType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCourseQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoriesList",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clustersList",
        "storageKey": null,
        "args": null,
        "concreteType": "ClusterType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CreateCourseQuery",
    "id": null,
    "text": "query CreateCourseQuery {\n  categoriesList {\n    value\n    label\n    color\n    id\n  }\n  clustersList {\n    value\n    label\n    status\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f4814405e7c86019ceab08302bdb4d0';

module.exports = node;
