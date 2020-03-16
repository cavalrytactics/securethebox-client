/**
 * @flow
 * @relayHash 5e613c55c837d88d482aabcfce032735
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListApplicationsQueryVariables = {||};
export type ListApplicationsQueryResponse = {|
  +applicationsList: ?$ReadOnlyArray<?{|
    +Id: ?string,
    +value: ?string,
    +label: ?string,
    +version: ?string,
  |}>
|};
export type ListApplicationsQuery = {|
  variables: ListApplicationsQueryVariables,
  response: ListApplicationsQueryResponse,
|};
*/


/*
query ListApplicationsQuery {
  applicationsList {
    Id
    value
    label
    version
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "Id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
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
  "name": "version",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListApplicationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "applicationsList",
        "storageKey": null,
        "args": null,
        "concreteType": "ApplicationType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListApplicationsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "applicationsList",
        "storageKey": null,
        "args": null,
        "concreteType": "ApplicationType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
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
    "name": "ListApplicationsQuery",
    "id": null,
    "text": "query ListApplicationsQuery {\n  applicationsList {\n    Id\n    value\n    label\n    version\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6865feb9a91f3f34e963b5d6e7d006b4';

module.exports = node;
