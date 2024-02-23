import https from "https";
import url from "url";
import {
  QuickSightClient,
  UpdateAnalysisPermissionsCommand,
  UpdateDashboardPermissionsCommand,
  UpdateDataSetPermissionsCommand,
  UpdateDataSourcePermissionsCommand,
  UpdateFolderPermissionsCommand,
  UpdateRoleCustomPermissionCommand,
  UpdateTemplatePermissionsCommand,
  UpdateThemePermissionsCommand,
  UpdateTopicPermissionsCommand,
} from "@aws-sdk/client-quicksight"; // ES Modules import

const client = new QuickSightClient(config);

async function UpdateAnalysisPermissions() {
  const input = {
    // UpdateAnalysisPermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    AnalysisId: "STRING_VALUE", // required
    GrantPermissions: [
      // UpdateResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateAnalysisPermissionsCommand(input);
  const response = await client.send(command);
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
}
async function UpdateDashboardPermissions() {
  const input = {
    // UpdateDashboardPermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    DashboardId: "STRING_VALUE", // required
    GrantPermissions: [
      // UpdateResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
    GrantLinkPermissions: [
      // UpdateLinkPermissionList
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokeLinkPermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateDashboardPermissionsCommand(input);
  const response = await client.send(command);
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
}
async function UpdateDataSetPermissions() {
  var input = {
    // UpdateDataSetPermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    DataSetId: "STRING_VALUE", // required
    GrantPermissions: [
      // ResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateDataSetPermissionsCommand(input);
  const response = await client.send(command);
  // { // UpdateDataSetPermissionsResponse
  //   DataSetArn: "STRING_VALUE",
  //   DataSetId: "STRING_VALUE",
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
}

async function UpdateDataSourcePermissions() {
  const input = {
    // UpdateDataSourcePermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    DataSourceId: "STRING_VALUE", // required
    GrantPermissions: [
      // ResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateDataSourcePermissionsCommand(input);
  const response = await client.send(command);
  // { // UpdateDataSourcePermissionsResponse
  //   DataSourceArn: "STRING_VALUE",
  //   DataSourceId: "STRING_VALUE",
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
}

async function UpdateFolderPermissions() {
  const input = {
    // UpdateFolderPermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    FolderId: "STRING_VALUE", // required
    GrantPermissions: [
      // ResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateFolderPermissionsCommand(input);
  const response = await client.send(command);
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
}

async function UpdateRoleCustomPermission() {
  const input = {
    // UpdateRoleCustomPermissionRequest
    CustomPermissionsName: "STRING_VALUE", // required
    Role: "ADMIN" || "AUTHOR" || "READER", // required
    AwsAccountId: "STRING_VALUE", // required
    Namespace: "STRING_VALUE", // required
  };
  const command = new UpdateRoleCustomPermissionCommand(input);
  const response = await client.send(command);
  // { // UpdateRoleCustomPermissionResponse
  //   RequestId: "STRING_VALUE",
  //   Status: Number("int"),
  // };
}

async function UpdateTemplatePermissions() {
  const input = {
    // UpdateTemplatePermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    TemplateId: "STRING_VALUE", // required
    GrantPermissions: [
      // UpdateResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateTemplatePermissionsCommand(input);
  const response = await client.send(command);
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
}

async function UpdateThemePermissions() {
  const input = {
    // UpdateThemePermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    ThemeId: "STRING_VALUE", // required
    GrantPermissions: [
      // UpdateResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateThemePermissionsCommand(input);
  const response = await client.send(command);
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
}

async function UpdateTopicPermissions() {
  const input = {
    // UpdateTopicPermissionsRequest
    AwsAccountId: "STRING_VALUE", // required
    TopicId: "STRING_VALUE", // required
    GrantPermissions: [
      // UpdateResourcePermissionList
      {
        // ResourcePermission
        Principal: "STRING_VALUE", // required
        Actions: [
          // ActionList // required
          "STRING_VALUE",
        ],
      },
    ],
    RevokePermissions: [
      {
        Principal: "STRING_VALUE", // required
        Actions: [
          // required
          "STRING_VALUE",
        ],
      },
    ],
  };
  const command = new UpdateTopicPermissionsCommand(input);
  const response = await client.send(command);
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
}

function sendResponse(event, context, responseStatus, responseData, physicalResourceId) {
  var responseObj = {
    Status: responseStatus,
    PhysicalResourceId: physicalResourceId,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    Data: responseData,
  };
  if (responseStatus === "FAILED") {
    responseObj.Reason =
      "See the details in CloudWatch Log Stream: " + context.logStreamName;
  };
  var responseBody = JSON.stringify(responseObj);

  console.log("RESPONSE BODY:\n", responseBody);

  var parsedUrl = url.parse(event.ResponseURL);

  var options = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.path,
    method: "PUT",
    headers: {
      "content-type": "",
      "content-length": responseBody.length,
    },
  };

  console.log("SENDING RESPONSE...\n");

  var request = https.request(options, function (response) {
    console.log("STATUS: " + response.statusCode);
    console.log("HEADERS: " + JSON.stringify(response.headers));
    // Tell AWS Lambda that the function execution is done
    context.done();
  });

  request.on("error", function (error) {
    console.log("sendResponse Error:" + error);
    // Tell AWS Lambda that the function execution is done
    context.done();
  });

  // write data to request body
  request.write(responseBody);
  request.end();
}

export async function handler(event, context) {
  console.debug("REQUEST RECEIVED:\n" + JSON.stringify(event));
  //  console.log("CONTEXT RECEIVED:\n" + JSON.stringify(context));
  var responseStatus = "FAILED";
  try {
    if (event.RequestType == "Create") {
        responseStatus = "SUCCESS";
    } else if (event.RequestType == "Update") {
        responseStatus = "SUCCESS";
    } else if (event.RequestType == "Delete") {
        responseStatus = "SUCCESS";
    }
  } catch (error) {
    console.error(error);
  } finally {
    sendResponse(event, context, responseStatus);
  }
}

// var context = {
//     logStreamName: "logStreamName",
//     done: function (param) {
//         console.log("Done!")
//         return param;
//     }
// }
// var event = {
//     RequestType: "Delete",
//     ResponseURL: "https://www.trustep.io"
// }
// await handler(event, context);
