/**
 * @flow
 * @relayHash 2f286f88a8c2b6f0348423f7444ffefd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateApplicationQueryVariables = {||};
export type CreateApplicationQueryResponse = {|
  +vulnerabilitiesList: ?$ReadOnlyArray<?{|
    +value: ?string,
    +label: ?string,
    +type: ?string,
    +exploitDbUrl: ?string,
  |}>
|};
export type CreateApplicationQuery = {|
  variables: CreateApplicationQueryVariables,
  response: CreateApplicationQueryResponse,
|};
*/


/*
query CreateApplicationQuery {
  vulnerabilitiesList {
    value
    label
    type
    exploitDbUrl
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
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "exploitDbUrl",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateApplicationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "vulnerabilitiesList",
        "storageKey": null,
        "args": null,
        "concreteType": "VulnerabilityType",
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
    "name": "CreateApplicationQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "vulnerabilitiesList",
        "storageKey": null,
        "args": null,
        "concreteType": "VulnerabilityType",
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
    "name": "CreateApplicationQuery",
    "id": null,
    "text": "query CreateApplicationQuery {\n  vulnerabilitiesList {\n    value\n    label\n    type\n    exploitDbUrl\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9875ac5d24de1fb0d7b4429b52f74d5';

module.exports = node;
