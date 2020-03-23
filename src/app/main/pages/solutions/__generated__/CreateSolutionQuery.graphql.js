/**
 * @flow
 * @relayHash 4e01789bebd3669a19bdd8e01ae445bc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateSolutionQueryVariables = {||};
export type CreateSolutionQueryResponse = {|
  +vulnerabilitiesList: ?$ReadOnlyArray<?{|
    +value: ?string,
    +label: ?string,
    +type: ?string,
    +exploitDbUrl: ?string,
  |}>
|};
export type CreateSolutionQuery = {|
  variables: CreateSolutionQueryVariables,
  response: CreateSolutionQueryResponse,
|};
*/


/*
query CreateSolutionQuery {
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
    "name": "CreateSolutionQuery",
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
    "name": "CreateSolutionQuery",
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
    "name": "CreateSolutionQuery",
    "id": null,
    "text": "query CreateSolutionQuery {\n  vulnerabilitiesList {\n    value\n    label\n    type\n    exploitDbUrl\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '765c341f7c2a4ccd558256d89254f4ab';

module.exports = node;
