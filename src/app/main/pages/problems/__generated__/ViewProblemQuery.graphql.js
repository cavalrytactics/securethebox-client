/**
 * @flow
 * @relayHash dd8ccf9194558b677c60e703b27e9d51
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ViewProblemQueryVariables = {|
  ID: string
|};
export type ViewProblemQueryResponse = {|
  +problem: ?{|
    +ID: string,
    +number: ?number,
    +label: ?string,
    +value: ?string,
    +points: ?number,
    +instructions: ?string,
    +startDate: ?string,
    +dueDate: ?string,
    +rejectDate: ?string,
  |}
|};
export type ViewProblemQuery = {|
  variables: ViewProblemQueryVariables,
  response: ViewProblemQueryResponse,
|};
*/


/*
query ViewProblemQuery(
  $ID: ID!
) {
  problem(ID: $ID) {
    ID
    number
    label
    value
    points
    instructions
    startDate
    dueDate
    rejectDate
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
  "name": "number",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "points",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "instructions",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startDate",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dueDate",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rejectDate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewProblemQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "problem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProblemType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewProblemQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "problem",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ProblemType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
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
    "name": "ViewProblemQuery",
    "id": null,
    "text": "query ViewProblemQuery(\n  $ID: ID!\n) {\n  problem(ID: $ID) {\n    ID\n    number\n    label\n    value\n    points\n    instructions\n    startDate\n    dueDate\n    rejectDate\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '98df6606c41595947e5c8aea5f7fd239';

module.exports = node;
