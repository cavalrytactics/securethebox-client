/**
 * @flow
 * @relayHash 5fbe8a1815c710460d724d1de9877414
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListSolutionsQueryVariables = {||};
export type ListSolutionsQueryResponse = {|
  +solutionsList: ?$ReadOnlyArray<?{|
    +ID: string,
    +value: ?string,
    +label: ?string,
  |}>
|};
export type ListSolutionsQuery = {|
  variables: ListSolutionsQueryVariables,
  response: ListSolutionsQueryResponse,
|};
*/


/*
query ListSolutionsQuery {
  solutionsList {
    ID
    value
    label
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListSolutionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "solutionsList",
        "storageKey": null,
        "args": null,
        "concreteType": "SolutionType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListSolutionsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "solutionsList",
        "storageKey": null,
        "args": null,
        "concreteType": "SolutionType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
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
    "name": "ListSolutionsQuery",
    "id": null,
    "text": "query ListSolutionsQuery {\n  solutionsList {\n    ID\n    value\n    label\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63a3bf1a0e1abc1fca82d7f00b9cebc3';

module.exports = node;
