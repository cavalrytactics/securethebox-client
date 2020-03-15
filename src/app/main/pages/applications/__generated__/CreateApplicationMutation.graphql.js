/**
 * @flow
 * @relayHash 042847a95c079febac5193eb30c27e5a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VulnerabilityInput = {|
  id?: ?string,
  value?: ?string,
  label?: ?string,
  type?: ?string,
  exploitDbUrl?: ?string,
|};
export type CreateApplicationMutationVariables = {|
  value: string,
  label: string,
  version?: ?string,
  vulnerability: VulnerabilityInput,
|};
export type CreateApplicationMutationResponse = {|
  +createApplication: ?{|
    +application: ?{|
      +value: ?string,
      +label: ?string,
      +version: ?string,
    |}
  |}
|};
export type CreateApplicationMutation = {|
  variables: CreateApplicationMutationVariables,
  response: CreateApplicationMutationResponse,
|};
*/


/*
mutation CreateApplicationMutation(
  $value: String!
  $label: String!
  $version: String
  $vulnerability: VulnerabilityInput!
) {
  createApplication(applicationData: {value: $value, label: $label, version: $version}, vulnerabilityData: $vulnerability) {
    application {
      value
      label
      version
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "value",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "label",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "version",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "vulnerability",
    "type": "VulnerabilityInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ObjectValue",
    "name": "applicationData",
    "fields": [
      {
        "kind": "Variable",
        "name": "label",
        "variableName": "label"
      },
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      },
      {
        "kind": "Variable",
        "name": "version",
        "variableName": "version"
      }
    ]
  },
  {
    "kind": "Variable",
    "name": "vulnerabilityData",
    "variableName": "vulnerability"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "CreateApplicationMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createApplication",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateApplicationMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "application",
            "storageKey": null,
            "args": null,
            "concreteType": "ApplicationType",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateApplicationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createApplication",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateApplicationMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "application",
            "storageKey": null,
            "args": null,
            "concreteType": "ApplicationType",
            "plural": false,
            "selections": [
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateApplicationMutation",
    "id": null,
    "text": "mutation CreateApplicationMutation(\n  $value: String!\n  $label: String!\n  $version: String\n  $vulnerability: VulnerabilityInput!\n) {\n  createApplication(applicationData: {value: $value, label: $label, version: $version}, vulnerabilityData: $vulnerability) {\n    application {\n      value\n      label\n      version\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a9b0c028335a4de487f54b3e90ab54a';

module.exports = node;
