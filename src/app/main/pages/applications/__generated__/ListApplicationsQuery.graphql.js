/**
 * @flow
 * @relayHash 088e35634e4f8ddc1837bbef1fc1e840
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListApplicationsQueryVariables = {||};
export type ListApplicationsQueryResponse = {|
  +applicationsList: ?$ReadOnlyArray<?{|
    +id: string,
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
    id
    value
    label
    version
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "applicationsList",
    "storageKey": null,
    "args": null,
    "concreteType": "ApplicationType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "version",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListApplicationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListApplicationsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ListApplicationsQuery",
    "id": null,
    "text": "query ListApplicationsQuery {\n  applicationsList {\n    id\n    value\n    label\n    version\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71947fe8d42e2e3b0217f6e6adb44dfe';

module.exports = node;
