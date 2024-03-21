import https from "https";
import url from "url";
import { parse as parseArn } from "@aws-sdk/util-arn-parser";
import {
  QuickSightClient,
  DescribeAnalysisPermissionsCommand,
  UpdateAnalysisPermissionsCommand,
  DescribeDashboardPermissionsCommand,
  UpdateDashboardPermissionsCommand,
  DescribeDataSetPermissionsCommand,
  UpdateDataSetPermissionsCommand,
  DescribeDataSourcePermissionsCommand,
  UpdateDataSourcePermissionsCommand,
  DescribeFolderPermissionsCommand,
  UpdateFolderPermissionsCommand,
  DescribeTemplatePermissionsCommand,
  UpdateTemplatePermissionsCommand,
  DescribeThemePermissionsCommand,
  UpdateThemePermissionsCommand,
  DescribeTopicPermissionsCommand,
  UpdateTopicPermissionsCommand,
} from "@aws-sdk/client-quicksight"; // ES Modules import

const QS_CLIENT = new QuickSightClient();

export const REQUEST_TYPE_CREATE = "Create";
export const REQUEST_TYPE_UPDATE = "Update";
export const REQUEST_TYPE_DELETE = "Delete";

export const RESPONSE_STATUS_FAILED = "FAILED";
export const RESPONSE_STATUS_SUCCESS = "SUCCESS";

export const ANALYSIS_ID_ATTR = "AnalysisId";
export const DASHBOARD_ID_ATTR = "DashboardId";
export const DATA_SET_ID_ATTR = "DataSetId";
export const DATA_SOURCE_ID_ATTR = "DataSourceId";
export const FOLDER_ID_ATTR = "FolderId";
export const TEMPLATE_ID_ATTR = "TemplateId";
export const THEME_ID_ATTR = "ThemeId";
export const TOPIC_ID_ATTR = "TopicId";

export const quicksightElementNames = [
  ANALYSIS_ID_ATTR,
  DASHBOARD_ID_ATTR,
  DATA_SET_ID_ATTR,
  DATA_SOURCE_ID_ATTR,
  FOLDER_ID_ATTR,
  TEMPLATE_ID_ATTR,
  THEME_ID_ATTR,
  TOPIC_ID_ATTR,
];
// GrantPermissions: [
//   // UpdateResourcePermissionList
//   {
//     // ResourcePermission
//     Principal: "STRING_VALUE", // required
//     Actions: [
//       // ActionList // required
//       "STRING_VALUE",
//     ],
//   },
// ],
// RevokePermissions: [
//   {
//     Principal: "STRING_VALUE", // required
//     Actions: [
//       // required
//       "STRING_VALUE",
//     ],
//   },
// ],

function validateParameters(awsAccountId, quicksightElementName, quicksightElementId) {
  if (!awsAccountId) {
    throw new Error("awsAccountId is mandatory!");
  }
  if (!quicksightElementId) {
    throw new Error("quicksightElementId is mandatory!");
  }
  if (!quicksightElementNames.includes(quicksightElementName)) {
    throw new Error("quicksightElementName should be one of " + quicksightElementNames);
  }
  return {
    AwsAccountId: awsAccountId,
  };
}

export function createUpdateInputRequest(awsAccountId, quicksightElementName, quicksightElementId, grants, revokes) {
  let input = createDescribeInputRequest(awsAccountId, quicksightElementName, quicksightElementId);
  if (grants) {
    input.GrantPermissions = grants;
  }
  if (revokes) {
    input.RevokePermissions = revokes;
  }
  return input;
}

export function createDescribeInputRequest(awsAccountId, quicksightElementName, quicksightElementId) {
  let input = validateParameters(awsAccountId, quicksightElementName, quicksightElementId);
  input[quicksightElementName] = quicksightElementId;
  return input;
}

export function createDashboardInputRequest(
  awsAccountId,
  quicksightElementName,
  quicksightElementId,
  grants,
  revokes,
  linkGrants,
  linkRevokes
) {
  let input = createUpdateInputRequest(awsAccountId, quicksightElementName, quicksightElementId, grants, revokes);
  if (linkGrants) {
    input.GrantLinkPermissions = linkGrants;
  }
  if (linkRevokes) {
    input.RevokeLinkPermissions = linkRevokes;
  }
  return input;
}

export async function DescribeAnalysisPermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeAnalysisPermissionsCommand(
      createDescribeInputRequest(awsAccountId, ANALYSIS_ID_ATTR, quicksightElementId)
    )
  );
  return response;
}

export async function UpdateAnalysisPermissions(awsAccountId, quicksightElementId, grants, revokes) {
  const response = await QS_CLIENT.send(
    new UpdateAnalysisPermissionsCommand(
      createUpdateInputRequest(awsAccountId, ANALYSIS_ID_ATTR, quicksightElementId, grants, revokes)
    )
  );
  // { // UpdateAnalysisPermissionsResponse
  //   AnalysisArn: "STRING_VALUE",
  //   AnalysisId: "STRING_VALUE",
  //   Permissions: [ // ResourcePermissionList
  //     { // ResourcePermission
  //       Principal: "STRING_VALUE", // required
  //       Actions: [ // ActionList // required
  //         "STRING_VALUE",
  //       ],
  //     },
  //   ],
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
  return response;
}

export async function DescribeDashboardPermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeDashboardPermissionsCommand(
      createDescribeInputRequest(awsAccountId, DASHBOARD_ID_ATTR, quicksightElementId)
    )
  );
  return response;
}

export async function UpdateDashboardPermissions(
  awsAccountId,
  quicksightElementId,
  grants,
  revokes,
  linkGrants,
  linkRevokes
) {
  const response = await QS_CLIENT.send(
    new UpdateDashboardPermissionsCommand(
      createDashboardInputRequest(
        awsAccountId,
        DASHBOARD_ID_ATTR,
        quicksightElementId,
        grants,
        revokes,
        linkGrants,
        linkRevokes
      )
    )
  );
  // { // UpdateDashboardPermissionsResponse
  //   DashboardArn: "STRING_VALUE",
  //   DashboardId: "STRING_VALUE",
  //   Permissions: [ // ResourcePermissionList
  //     { // ResourcePermission
  //       Principal: "STRING_VALUE", // required
  //       Actions: [ // ActionList // required
  //         "STRING_VALUE",
  //       ],
  //     },
  //   ],
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  //   LinkSharingConfiguration: { // LinkSharingConfiguration
  //     Permissions: [
  //       {
  //         Principal: "STRING_VALUE", // required
  //         Actions: [ // required
  //           "STRING_VALUE",
  //         ],
  //       },
  //     ],
  //   },
  // };
  return response;
}

export async function DescribeDataSetPermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeDataSetPermissionsCommand(
      createDescribeInputRequest(awsAccountId, DATA_SET_ID_ATTR, quicksightElementId)
    )
  );
  return response;
}

export async function UpdateDataSetPermissions(awsAccountId, quicksightElementId, grants, revokes) {
  const response = await QS_CLIENT.send(
    new UpdateDataSetPermissionsCommand(
      createUpdateInputRequest(awsAccountId, DATA_SET_ID_ATTR, quicksightElementId, grants, revokes)
    )
  );
  // { // UpdateDataSetPermissionsResponse
  //   DataSetArn: "STRING_VALUE",
  //   DataSetId: "STRING_VALUE",
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
  return response;
}

export async function DescribeDataSourcePermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeDataSourcePermissionsCommand(
      createDescribeInputRequest(awsAccountId, DATA_SOURCE_ID_ATTR, quicksightElementId)
    )
  );
  return response;
}

export async function UpdateDataSourcePermissions(awsAccountId, quicksightElementId, grants, revokes) {
  const response = await QS_CLIENT.send(
    new UpdateDataSourcePermissionsCommand(
      createUpdateInputRequest(awsAccountId, DATA_SOURCE_ID_ATTR, quicksightElementId, grants, revokes)
    )
  );
  // { // UpdateDataSourcePermissionsResponse
  //   DataSourceArn: "STRING_VALUE",
  //   DataSourceId: "STRING_VALUE",
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
  return response;
}

export async function DescribeFolderPermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeFolderPermissionsCommand(createDescribeInputRequest(awsAccountId, FOLDER_ID_ATTR, quicksightElementId))
  );
  return response;
}

export async function UpdateFolderPermissions(awsAccountId, quicksightElementId, grants, revokes) {
  const response = await QS_CLIENT.send(
    new UpdateFolderPermissionsCommand(
      createUpdateInputRequest(awsAccountId, FOLDER_ID_ATTR, quicksightElementId, grants, revokes)
    )
  );
  // { // UpdateFolderPermissionsResponse
  //   Status: Number("int"),
  //   Arn: "STRING_VALUE",
  //   FolderId: "STRING_VALUE",
  //   Permissions: [ // ResourcePermissionList
  //     { // ResourcePermission
  //       Principal: "STRING_VALUE", // required
  //       Actions: [ // ActionList // required
  //         "STRING_VALUE",
  //       ],
  //     },
  //   ],
  //   RequestId: "STRING_VALUE",
  // };
  return response;
}

export async function DescribeTemplatePermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeTemplatePermissionsCommand(
      createDescribeInputRequest(awsAccountId, TEMPLATE_ID_ATTR, quicksightElementId)
    )
  );
  return response;
}

export async function UpdateTemplatePermissions(awsAccountId, quicksightElementId, grants, revokes) {
  const response = await QS_CLIENT.send(
    new UpdateTemplatePermissionsCommand(
      createUpdateInputRequest(awsAccountId, TEMPLATE_ID_ATTR, quicksightElementId, grants, revokes)
    )
  );
  // { // UpdateTemplatePermissionsResponse
  //   TemplateId: "STRING_VALUE",
  //   TemplateArn: "STRING_VALUE",
  //   Permissions: [ // ResourcePermissionList
  //     { // ResourcePermission
  //       Principal: "STRING_VALUE", // required
  //       Actions: [ // ActionList // required
  //         "STRING_VALUE",
  //       ],
  //     },
  //   ],
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
  return response;
}

export async function DescribeThemePermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeThemePermissionsCommand(createDescribeInputRequest(awsAccountId, THEME_ID_ATTR, quicksightElementId))
  );
  // { // UpdateThemePermissionsResponse
  //   ThemeId: "STRING_VALUE",
  //   ThemeArn: "STRING_VALUE",
  //   Permissions: [ // ResourcePermissionList
  //     { // ResourcePermission
  //       Principal: "STRING_VALUE", // required
  //       Actions: [ // ActionList // required
  //         "STRING_VALUE",
  //       ],
  //     },
  //   ],
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
  return response;
}

export async function UpdateThemePermissions(awsAccountId, quicksightElementId, grants, revokes) {
  const response = await QS_CLIENT.send(
    new UpdateThemePermissionsCommand(
      createUpdateInputRequest(awsAccountId, THEME_ID_ATTR, quicksightElementId, grants, revokes)
    )
  );
  // { // UpdateThemePermissionsResponse
  //   ThemeId: "STRING_VALUE",
  //   ThemeArn: "STRING_VALUE",
  //   Permissions: [ // ResourcePermissionList
  //     { // ResourcePermission
  //       Principal: "STRING_VALUE", // required
  //       Actions: [ // ActionList // required
  //         "STRING_VALUE",
  //       ],
  //     },
  //   ],
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
  return response;
}

export async function DescribeTopicPermissions(awsAccountId, quicksightElementId) {
  const response = await QS_CLIENT.send(
    new DescribeTopicPermissionsCommand(createDescribeInputRequest(awsAccountId, TOPIC_ID_ATTR, quicksightElementId))
  );
  return response;
}

export async function UpdateTopicPermissions(awsAccountId, quicksightElementId, grants, revokes) {
  const response = await QS_CLIENT.send(
    new UpdateTopicPermissionsCommand(
      createUpdateInputRequest(awsAccountId, TOPIC_ID_ATTR, quicksightElementId, grants, revokes)
    )
  );
  // { // UpdateTopicPermissionsResponse
  //   TopicId: "STRING_VALUE",
  //   TopicArn: "STRING_VALUE",
  //   Permissions: [ // ResourcePermissionList
  //     { // ResourcePermission
  //       Principal: "STRING_VALUE", // required
  //       Actions: [ // ActionList // required
  //         "STRING_VALUE",
  //       ],
  //     },
  //   ],
  //   Status: Number("int"),
  //   RequestId: "STRING_VALUE",
  // };
  return response;
}

export const quicksightFunctionNames = {
  [ANALYSIS_ID_ATTR]: {
    describe: DescribeAnalysisPermissions,
    update: UpdateAnalysisPermissions,
  },
  [DASHBOARD_ID_ATTR]: {
    describe: DescribeDashboardPermissions,
    update: UpdateDashboardPermissions,
  },
  [DATA_SET_ID_ATTR]: {
    describe: DescribeDataSetPermissions,
    update: UpdateDataSetPermissions,
  },
  [DATA_SOURCE_ID_ATTR]: {
    describe: DescribeDataSourcePermissions,
    update: UpdateDataSourcePermissions,
  },
  [FOLDER_ID_ATTR]: {
    describe: DescribeFolderPermissions,
    update: UpdateFolderPermissions,
  },
  [TEMPLATE_ID_ATTR]: {
    describe: DescribeTemplatePermissions,
    update: UpdateTemplatePermissions,
  },
  [THEME_ID_ATTR]: {
    describe: DescribeThemePermissions,
    update: UpdateThemePermissions,
  },
  [TOPIC_ID_ATTR]: {
    describe: DescribeTopicPermissions,
    update: UpdateTopicPermissions,
  },
};

export function validateResourceProperties(properties) {
  let found = 0;
  quicksightElementNames.forEach((quicksightElementName) => {
    if (quicksightElementName in properties) {
      found++;
    }
  });
  if (found === 0) {
    throw new Error(
      "One of the " +
        quicksightElementNames.slice(0, -1).join(", ") +
        " or " +
        quicksightElementNames.slice(-1) +
        " properties should be defined."
    );
  }
  if (found > 1) {
    throw new Error(
      "Only one of the " +
        quicksightElementNames.slice(0, -1).join(", ") +
        " or " +
        quicksightElementNames.slice(-1) +
        " properties should be defined."
    );
  }
}

export function getQuicksightElementId(properties) {
  let quicksightElementId = null;
  for (const quicksightElementName of quicksightElementNames) {
    if (properties[quicksightElementName]) {
      quicksightElementId = properties[quicksightElementName];
      break;
    }
  }
  return quicksightElementId;
}

export function getQuicksightElementName(properties) {
  let ret = null;
  for (const quicksightElementName of quicksightElementNames) {
    if (properties[quicksightElementName]) {
      ret = quicksightElementName;
      break;
    }
  }
  return ret;
}

export async function getActualPermissions(awsAccountId, quicksightElementName, quicksightElementId) {
  let functions = quicksightFunctionNames[quicksightElementName];
  return await functions.describe(awsAccountId, quicksightElementId);
}

export function getViolatingPrincipals(actualPerms, desiredPerms, oldPerms) {
  const principalsActual = new Set();

  // Extract principals from Permissions field
  actualPerms.Permissions?.forEach((permission) => {
    principalsActual.add(permission.Principal);
  });

  // Extract principals from LinkSharingConfiguration field
  actualPerms.LinkSharingConfiguration?.Permissions?.forEach((permission) => {
    principalsActual.add(permission.Principal);
  });
  const principalsDesired = new Set(
    desiredPerms?.Permissions?.flatMap((permission) =>
      Array.isArray(permission.Principals) ? permission.Principals : [permission.Principals]
    ) || []
  );
  const principalsOld = new Set(
    oldPerms?.Permissions?.flatMap((permission) =>
      Array.isArray(permission.Principals) ? permission.Principals : [permission.Principals]
    ) || []
  );

  const overlap = [...principalsActual].filter(
    (principal) => principalsDesired.has(principal) && !principalsOld.has(principal)
  );
  return overlap;
}

function httpsRequestWrapper(options, context, responseBody) {
  return new Promise(function (resolve, reject) {
    const req = https.request(options, function (response) {
      // cumulate data
      // should be here so response finishs to fetch all data.
      let body = [];
      response.on("data", function (chunk) {
        body.push(chunk);
      });
      // resolve
      response.on("end", () => {
        try {
          context.done(response.statusCode);
        } finally {
          resolve(response.statusCode);
        }
      });
      // reject on response error
      response.on("error", function (err) {
        reject(err);
      });
    });
    // reject on request error
    req.on("error", function (err) {
      reject(err);
    });
    // Send the request for processing
    req.write(responseBody);
    req.end();
  });
}

async function sendResponse(event, context, responseStatus, responseData, physicalResourceId) {
  let responseObj = {
    PhysicalResourceId: physicalResourceId,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
  };
  if (responseStatus === RESPONSE_STATUS_FAILED) {
    responseObj.Status = RESPONSE_STATUS_FAILED
    responseObj.Reason = `${responseData}.\nSee the details in CloudWatch Log Stream: ${context.logStreamName}`;
  } else if (responseStatus === RESPONSE_STATUS_SUCCESS) {
    responseObj.Status = RESPONSE_STATUS_SUCCESS
    responseObj.Data = responseData;
  } else {
    responseObj.Status = RESPONSE_STATUS_FAILED
    responseObj.Reason = `Invalid response generated. Please open issue in github.\nSee the details in CloudWatch Log Stream: ${context.logStreamName}`;
  }
  let responseBody = JSON.stringify(responseObj);

  let parsedUrl = url.parse(event.ResponseURL);

  let options = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.path,
    method: "PUT",
    headers: {
      "content-type": "",
      "content-length": responseBody.length,
    },
  };
  // promissifyed http request to make it synchronous for invokers
  await httpsRequestWrapper(options, context, responseBody);
}

function mergePermissions(event, source) {
  const transformArray = (inputArray) => {
    const resultMap = createResultMap(inputArray);
    return convertMapToArray(resultMap);
  };

  const createResultMap = (inputArray) => {
    const resultMap = new Map();

    inputArray.forEach(({ Principals, Actions }) => {
      const principals = Array.isArray(Principals) ? Principals : [Principals];
      const actions = Array.isArray(Actions) ? Actions : [Actions];

      mergeActions(principals, actions, resultMap);
    });

    return resultMap;
  };
  const mergeActions = (principals, actions, resultMap) => {
    principals.forEach((principal) => {
      if (!resultMap.has(principal)) {
        resultMap.set(principal, new Set());
      }

      const existingActions = resultMap.get(principal);
      actions.forEach((action) => existingActions.add(action));
    });
  }
  const convertMapToArray = (resultMap) => {
    return Array.from(resultMap, ([Principal, Actions]) => ({
      Principal,
      Actions: Array.from(Actions),
    }));
  };

  const result = { Permissions: transformArray(event[source].Permissions) };

  if (event[source].LinkPermissions) {
    result["LinkPermissions"] = transformArray(event[source].LinkPermissions);
  }

  return result;


}

function generateChanges(previous, current) {
  const changes = {
    GrantPermissions: new Map(),
    RevokePermissions: new Map(),
    GrantLinkPermissions: new Map(),
    RevokeLinkPermissions: new Map(),
  };

  const processPermissions = (permissions, type) => {
    const mergedActions = new Map();

    permissions?.forEach(({ Principal, Actions }) => {
      const existingActions = mergedActions.get(Principal) || new Set();
      Actions?.forEach((action) => existingActions.add(action));
      mergedActions.set(Principal, existingActions);
    });

    mergedActions.forEach((mergedActionsSet, Principal) => {
      const grantActions =
        current && current[type]
          ? [
              ...new Set(
                (current[type]?.filter((item) => item.Principal === Principal) || []).flatMap(
                  (entry) => entry.Actions || []
                )
              ),
            ]
          : [];
      const revokeActions =
        previous && previous[type]
          ? [
              ...new Set(
                (previous[type]?.filter((item) => item.Principal === Principal) || []).flatMap(
                  (entry) => entry.Actions || []
                )
              ),
            ]
          : [];

      // Find the intersection of actions between grant and revoke
      const intersectActions = grantActions.filter((action) => revokeActions.includes(action));

      // Remove intersected actions from both grant and revoke
      const filteredGrantActions = grantActions.filter((action) => !intersectActions.includes(action));
      const filteredRevokeActions = revokeActions.filter((action) => !intersectActions.includes(action));

      if (filteredGrantActions.length > 0) {
        const existingGrantActions = changes[`Grant${type}`].get(Principal) || new Set();
        filteredGrantActions.forEach((action) => existingGrantActions.add(action));
        changes[`Grant${type}`].set(Principal, new Set(existingGrantActions));
      }

      if (filteredRevokeActions.length > 0) {
        const existingRevokeActions = changes[`Revoke${type}`].get(Principal) || new Set();
        filteredRevokeActions.forEach((action) => existingRevokeActions.add(action));
        changes[`Revoke${type}`].set(Principal, existingRevokeActions);
      }
    });

    // Include principals from current that are not in previous
    const principalsToAdd = current[type]?.filter(
      ({ Principal }) => !previous || !previous[type]?.some((item) => item.Principal === Principal)
    );

    principalsToAdd?.forEach(({ Principal, Actions }) => {
      const existingGrantActions = changes[`Grant${type}`].get(Principal) || new Set();
      Actions?.forEach((action) => existingGrantActions.add(action));
      changes[`Grant${type}`].set(Principal, existingGrantActions);
    });
  };

  // Process Permissions
  processPermissions(current?.Permissions, "Permissions");

  // Process LinkPermissions
  processPermissions(current?.LinkPermissions, "LinkPermissions");

  // Convert Maps to Array of objects with the desired structure
  Object.keys(changes).forEach((type) => {
    changes[type] = Array.from(changes[type], ([Principal, Actions]) => ({
      Principal,
      Actions: Array.from(Actions),
    }));

    if (changes[type].length === 0) {
      delete changes[type];
    }
  });

  return changes;
}

function revertChanges(changes) {
  const revertedChanges = {
    GrantPermissions: [],
    RevokePermissions: [],
    GrantLinkPermissions: [],
    RevokeLinkPermissions: [],
  };

  // Revert Grants into Revokes and vice versa
  Object.keys(changes).forEach((type) => {
    changes[type]?.forEach(({ Principal, Actions }) => {
      const revokeType = type.includes("Grant") ? type.replace("Grant", "Revoke") : type.replace("Revoke", "Grant");

      revertedChanges[revokeType].push({
        Principal,
        Actions,
      });
    });
  });
  Object.keys(revertedChanges).forEach((type) => {
    if (revertedChanges[type].length === 0) {
      delete revertedChanges[type];
    }
  });

  return revertedChanges;
}

async function applyChanges(
  changes,
  quicksightElementName,
  stackArn,
  quicksightElementId,
  responseData,
  responseStatus
) {
  if (changes) {
    console.log(`Changes to apply:\n${JSON.stringify(changes, null, "  ")}`);
    const applyChanges = quicksightFunctionNames[quicksightElementName].update;
    let response = await sendQuicksightUpdateCommand(quicksightElementName, applyChanges, stackArn, quicksightElementId, changes);
    if (response) {
      ({ responseData, responseStatus } = handleQuicksightUpdateCommandResponse(response, responseData, quicksightElementId, responseStatus));
    } else {
      responseData = {
        Id: quicksightElementId
      };
      console.log(responseData);
    }
  }
  return { responseData, responseStatus };
}
function handleQuicksightUpdateCommandResponse(response, responseData, quicksightElementId, responseStatus) {
  console.log(`Response to applied changes:\n${JSON.stringify(response, null, "  ")}`);
  if (response.Status >= 200 && response.Status < 300) {
    responseData = {
      Id: quicksightElementId
    };
    responseStatus = RESPONSE_STATUS_SUCCESS;
  } else {
    responseData = `Quicksight permissions for ${quicksightElementId} failed to be applied: ${JSON.stringify(
      response
    )}.`;
  }
  return { responseData, responseStatus };
}

async function sendQuicksightUpdateCommand(quicksightElementName, applyChanges, stackArn, quicksightElementId, changes) {
  let response;
  if (quicksightElementName === DASHBOARD_ID_ATTR) {
    response = await applyChanges(
      stackArn.accountId,
      quicksightElementId,
      changes.GrantPermissions ? changes.GrantPermissions : undefined,
      changes.RevokePermissions ? changes.RevokePermissions : undefined,
      changes.GrantLinkPermissions ? changes.GrantLinkPermissions : undefined,
      changes.RevokeLinkPermissions ? changes.RevokeLinkPermissions : undefined
    );
  } else {
    response = await applyChanges(
      stackArn.accountId,
      quicksightElementId,
      changes.GrantPermissions ? changes.GrantPermissions : undefined,
      changes.RevokePermissions ? changes.RevokePermissions : undefined
    );
  }
  return response;
}

export async function handler(event, context) {
  console.debug(`EVENT RECEIVED:\n ${JSON.stringify(event, null, "  ")}`);

  let responseStatus = RESPONSE_STATUS_FAILED;
  let stackArn = parseArn(event.StackId);

  let responseData = "Undefined failure";
  let quicksightElementId,
    quicksightElementName = null;

  try {
    validateResourceProperties(event.ResourceProperties);
    quicksightElementId = getQuicksightElementId(event.ResourceProperties);
    if (event.OldResourceProperties) {
      validateResourceProperties(event.OldResourceProperties);
    }
    quicksightElementName = getQuicksightElementName(event.ResourceProperties);
    let actualPermissions = await getActualPermissions(stackArn.accountId, quicksightElementName, quicksightElementId);
    let violatingPrincipals = getViolatingPrincipals(
      actualPermissions,
      event.ResourceProperties,
      event.OldResourceProperties
    );
    if (violatingPrincipals.length > 0) {
      responseData = `The permissions for principals ${JSON.stringify(
        violatingPrincipals
      )} were defined outside this cloudformation resource. Please remove them from the template or revoke those already existing permissions before proceeding.`;
    } else {
      let newPermissions = mergePermissions(event, "ResourceProperties");
      let changes;
      if (event.RequestType === REQUEST_TYPE_CREATE) {
        changes = generateChanges(null, newPermissions);
      } else if (event.RequestType === REQUEST_TYPE_UPDATE) {
        let previousPermissions = mergePermissions(event, "OldResourceProperties");
        changes = generateChanges(previousPermissions, newPermissions);
      } else if (event.RequestType === REQUEST_TYPE_DELETE) {
        let tempChanges = generateChanges(null, newPermissions);
        changes = revertChanges(tempChanges);
      } else {
        responseData = `Unsupported RequestType: ${event.RequestType}`;
      }
      ({ responseData, responseStatus } = await applyChanges(
        changes,
        quicksightElementName,
        stackArn,
        quicksightElementId,
        responseData,
        responseStatus
      ));
    }
  } catch (error) {
    console.error("Error name: ", error.name);
    console.error("Error message: ", error.message);

    // Print the stack trace
    if (error.stack) {
      console.error("Stack trace: ", error.stack);
    }
    responseData = `Failed to deploy ${quicksightElementId} due to ${error.name} ${error.message}`;
    responseStatus = RESPONSE_STATUS_FAILED;
  } finally {
    const physicalResourceId = `${quicksightElementName.replace(/Id$/, "").toLowerCase()}/${quicksightElementId}`;
    await sendResponse(event, context, responseStatus, responseData, physicalResourceId);
  }
}
