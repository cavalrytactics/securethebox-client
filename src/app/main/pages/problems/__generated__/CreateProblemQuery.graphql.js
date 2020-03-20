/**
 * @flow
 * @relayHash eadab533e5c148c04b576de296b2249a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProblemQueryVariables = {||};
export type CreateProblemQueryResponse = {|
  +vulnerabilitiesList: ?$ReadOnlyArray<?{|
    +value: ?string,
    +label: ?string,
    +type: ?string,
    +exploitDbUrl: ?string,
  |}>
|};
export type CreateProblemQuery = {|
  variables: CreateProblemQueryVariables,
  response: CreateProblemQueryResponse,
|};
*/


/*
query CreateProblemQuery {
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
    "name": "CreateProblemQuery",
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
    "name": "CreateProblemQuery",
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
    "name": "CreateProblemQuery",
    "id": null,
    "text": "query CreateProblemQuery {\n  vulnerabilitiesList {\n    value\n    label\n    type\n    exploitDbUrl\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b1644ea24a2f86719c835fea8729a2f7';

module.exports = node;
