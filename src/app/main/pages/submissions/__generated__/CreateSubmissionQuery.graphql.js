/**
 * @flow
 * @relayHash 8b1e655e0bca54ebcf84a81b3f4c9b14
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSubmissionQueryVariables = {||};
export type CreateSubmissionQueryResponse = {|
  +vulnerabilitiesList: ?$ReadOnlyArray<?{|
    +ID: string,
    +value: ?string,
    +label: ?string,
    +type: ?string,
    +exploitDbUrl: ?string,
  |}>
|};
export type CreateSubmissionQuery = {|
  variables: CreateSubmissionQueryVariables,
  response: CreateSubmissionQueryResponse,
|};
*/


/*
query CreateSubmissionQuery {
  vulnerabilitiesList {
    ID
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
  "name": "ID",
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
  "name": "type",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "CreateSubmissionQuery",
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
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateSubmissionQuery",
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
          (v4/*: any*/),
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
    "name": "CreateSubmissionQuery",
    "id": null,
    "text": "query CreateSubmissionQuery {\n  vulnerabilitiesList {\n    ID\n    value\n    label\n    type\n    exploitDbUrl\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6df4cfbd63e8eda32aabea489651deb7';

module.exports = node;
