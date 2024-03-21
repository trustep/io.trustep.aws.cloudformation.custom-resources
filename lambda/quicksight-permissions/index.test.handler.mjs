import { jest, describe, expect, it } from "@jest/globals";
import { mockClient } from "aws-sdk-client-mock";
import "aws-sdk-client-mock-jest";
import nock from "nock";
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

import {
  handler,
  ANALYSIS_ID_ATTR,
  DASHBOARD_ID_ATTR,
  DATA_SET_ID_ATTR,
  DATA_SOURCE_ID_ATTR,
  FOLDER_ID_ATTR,
  TEMPLATE_ID_ATTR,
  THEME_ID_ATTR,
  TOPIC_ID_ATTR,
  REQUEST_TYPE_CREATE,
  REQUEST_TYPE_UPDATE,
  REQUEST_TYPE_DELETE,
} from "./index.mjs";

const qsClientMock = mockClient(QuickSightClient);
const serviceToken = "arn:aws:lambda:us-east-1:123456789012:function:my-service-token";
const DEFAULT_SIGNED_URL_DOMAIN = "https://www.trustep.io";
const DEFAULT_SIGNED_URL_PATH = "/pt/";
const DEFAULT_SIGNED_URL = `${DEFAULT_SIGNED_URL_DOMAIN}${DEFAULT_SIGNED_URL_PATH}`;
describe("handler ", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    qsClientMock.reset();
  });

  // first set of tests just to make sure we call each and every combination of elements and operations.
  const operations = [
    {
      RequestType: REQUEST_TYPE_CREATE,
      NewPermissions: [
        {
          Principals: [
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
          ],
          Actions: ["quicksight:DescribeDataSet", "quicksight:ListIngestions"],
        },
        {
          Principals:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
          Actions: "quicksight:DescribeDataSet",
        },
      ],
      ActualPermissions: {
        Status: 200,
        Permissions: [
          {
            Principal: "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/foo@bar.com",
            Actions: [
              "quicksight:DeleteDataSet",
              "quicksight:UpdateDataSetPermissions",
              "quicksight:PutDataSetRefreshProperties",
              "quicksight:CreateRefreshSchedule",
              "quicksight:CancelIngestion",
              "quicksight:ListRefreshSchedules",
              "quicksight:PassDataSet",
              "quicksight:UpdateRefreshSchedule",
              "quicksight:DeleteRefreshSchedule",
              "quicksight:DescribeDataSetRefreshProperties",
              "quicksight:DescribeDataSet",
              "quicksight:CreateIngestion",
              "quicksight:DescribeRefreshSchedule",
              "quicksight:ListIngestions",
              "quicksight:DescribeDataSetPermissions",
              "quicksight:UpdateDataSet",
              "quicksight:DeleteDataSetRefreshProperties",
              "quicksight:DescribeIngestion",
            ],
          },
        ],
        RequestId: "a4df2327-e02d-4706-8696-41c598d76fbe",
      },
    },
    {
      RequestType: REQUEST_TYPE_UPDATE,
      NewPermissions: [
        {
          Principals: [
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
          ],
          Actions: ["quicksight:DescribeDataSet", "quicksight:ListRefreshSchedules"],
        },
        {
          Principals:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
          Actions: "quicksight:DescribeDataSet",
        },
      ],
      OldPermissions: [
        {
          Principals: [
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
          ],
          Actions: ["quicksight:DescribeDataSet", "quicksight:ListIngestions"],
        },
        {
          Principals:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
          Actions: "quicksight:DescribeDataSet",
        },
      ],
    },
    {
      RequestType: REQUEST_TYPE_DELETE,
      NewPermissions: [
        {
          Principals: [
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
          ],
          Actions: ["quicksight:DescribeDataSet", "quicksight:ListRefreshSchedules"],
        },
        {
          Principals:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
          Actions: "quicksight:DescribeDataSet",
        },
      ],
      ActualPermissions: {
        Status: 200,
        Permissions: [
          {
            Principal: "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/foo@bar.com",
            Actions: [
              "quicksight:DeleteDataSet",
              "quicksight:UpdateDataSetPermissions",
              "quicksight:PutDataSetRefreshProperties",
              "quicksight:CreateRefreshSchedule",
              "quicksight:CancelIngestion",
              "quicksight:ListRefreshSchedules",
              "quicksight:PassDataSet",
              "quicksight:UpdateRefreshSchedule",
              "quicksight:DeleteRefreshSchedule",
              "quicksight:DescribeDataSetRefreshProperties",
              "quicksight:DescribeDataSet",
              "quicksight:CreateIngestion",
              "quicksight:DescribeRefreshSchedule",
              "quicksight:ListIngestions",
              "quicksight:DescribeDataSetPermissions",
              "quicksight:UpdateDataSet",
              "quicksight:DeleteDataSetRefreshProperties",
              "quicksight:DescribeIngestion",
            ],
          },
        ],
        RequestId: "a4df2327-e02d-4706-8696-41c598d76fbe",
      },
    },
  ];

  const quicksightElements = [
    {
      QuicksightElementName: ANALYSIS_ID_ATTR,
      QuicksightElementId: "my-analysis-id",
      QuicksightElementArnName: "AnalysisArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:analysis/my-analysis-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeAnalysisPermissionsCommand,
      UpdateCommand: UpdateAnalysisPermissionsCommand,
      Response: {
        AnalysisArn: "arn:aws:quicksight:us-east-1:123456789012:analysis/my-analysis-id",
        AnalysisId: "my-analysis-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
    },
    {
      QuicksightElementName: DASHBOARD_ID_ATTR,
      QuicksightElementId: "my-dashboard-id",
      QuicksightElementArnName: "DashboardArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:dashboard/my-dashboard-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeDashboardPermissionsCommand,
      UpdateCommand: UpdateDashboardPermissionsCommand,
      Response: {
        DashboardArn: "arn:aws:quicksight:us-east-1:123456789012:dashboard/my-dashboard-id",
        DashboardId: "my-dashboard-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
        LinkSharingConfiguration: {
          Permissions: [
            {
              Principal: "STRING_VALUE",
              Actions: ["STRING_VALUE"],
            },
          ],
        },
      },
      LinkPermissionsNew: [
        {
          Principals: [
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
          ],
          Actions: ["quicksight:DescribeDataSet", "quicksight:ListIngestions"],
        },
        {
          Principals:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
          Actions: "quicksight:DescribeDataSet",
        },
      ],
      LinkPermissionsOld: [
        {
          Principal:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
          Actions: ["quicksight:ListIngestions", "quicksight:ListEverything"],
        },
        {
          Principal:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
          Actions: ["quicksight:ListIngestions"],
        },
        {
          Principal:
            "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
          Actions: ["quicksight:DoSomethingElse"],
        },
      ],
    },
    {
      QuicksightElementName: DATA_SET_ID_ATTR,
      QuicksightElementId: "my-data-set-id",
      QuicksightElementArnName: "DataSetArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:dataset/my-data-set-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeDataSetPermissionsCommand,
      UpdateCommand: UpdateDataSetPermissionsCommand,
      Response: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:dataset/my-data-set-id",
        DataSetId: "my-data-set-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
    },
    {
      QuicksightElementName: DATA_SOURCE_ID_ATTR,
      QuicksightElementId: "my-data-source-id",
      QuicksightElementArnName: "DataSourceArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:datasource/my-data-source-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeDataSourcePermissionsCommand,
      UpdateCommand: UpdateDataSourcePermissionsCommand,
      Response: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:datasource/my-data-source-id",
        DataSetId: "my-data-source-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
    },
    {
      QuicksightElementName: FOLDER_ID_ATTR,
      QuicksightElementId: "my-folder-id",
      QuicksightElementArnName: "FolderArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:folder/my-folder-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeFolderPermissionsCommand,
      UpdateCommand: UpdateFolderPermissionsCommand,
      Response: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:folder/my-folder-id",
        DataSetId: "my-folder-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
    },
    {
      QuicksightElementName: TEMPLATE_ID_ATTR,
      QuicksightElementId: "my-template-id",
      QuicksightElementArnName: "TemplateArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:template/my-template-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeTemplatePermissionsCommand,
      UpdateCommand: UpdateTemplatePermissionsCommand,
      Response: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:template/my-template-id",
        DataSetId: "my-template-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
    },
    {
      QuicksightElementName: THEME_ID_ATTR,
      QuicksightElementId: "my-theme-id",
      QuicksightElementArnName: "ThemeArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:theme/my-theme-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeThemePermissionsCommand,
      UpdateCommand: UpdateThemePermissionsCommand,
      Response: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:theme/my-theme-id",
        DataSetId: "my-theme-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
    },
    {
      QuicksightElementName: TOPIC_ID_ATTR,
      QuicksightElementId: "my-topic-id",
      QuicksightElementArnName: "TopicArn",
      QuicksightElementArnId: "arn:aws:quicksight:us-east-1:123456789012:topic/my-topic-id",
      PhysicalResourceId: "",
      DescribeCommand: DescribeTopicPermissionsCommand,
      UpdateCommand: UpdateTopicPermissionsCommand,
      Response: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:topic/my-topic-id",
        DataSetId: "my-topic-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
    },
  ];

  quicksightElements.forEach((element) => {
    operations.forEach(async (operation) => {
      it(`should handle ${element.QuicksightElementName} for ${operation.RequestType}`, async () => {
        // setup event data
        let event = {
          ResponseURL: DEFAULT_SIGNED_URL,
          StackId: "arn:aws:cloudformation:us-east-1:123456789012:stack/my-stack/5d3078a0-d0c0-11ee-83ff-1209d5cd2055",
          RequestId: "f0a8339b-0f49-497c-a1f8-7e649ce6d52b",
          LogicalResourceId: "PruebaCustomResource",
          ResourceType: "Custom::QuicksightPermissions",
          ResourceProperties: {},
        };
        event["RequestType"] = operation.RequestType;
        event.ServiceToken = serviceToken;
        event["PhysicalResourceId"] = element.PhysicalResourceId;
        event.ResourceProperties.ServiceToken = serviceToken;
        event.ResourceProperties[element.QuicksightElementName] = element.QuicksightElementId;
        event.ResourceProperties.Permissions = operation.NewPermissions;
        if (operation.OldPermissions) {
          event["OldResourceProperties"] = {
            ServiceToken: serviceToken,
            Permissions: operation.OldPermissions,
            [element.QuicksightElementName]: element.QuicksightElementId,
          };
        }
        if (element.LinkPermissionsNew) {
          event["ResourceProperties"].LinkPermissions = element.LinkPermissionsNew;
        }
        if (element.LinkPermissionsOld && operation.RequestType === "Create") {
          if (!event["OldResourceProperties"]) {
            // If OldResourceProperties is undefined, initialize it
            event["OldResourceProperties"] = {
              ServiceToken: serviceToken,
              Permissions: operation.OldPermissions,
              [element.QuicksightElementName]: element.QuicksightElementId,
            };
          }
          event["OldResourceProperties"].LinkPermissions = element.LinkPermissionsOld;
        }
        const context = {
          logStreamName: "logStreamName",
          done: jest.fn(),
        };
        let actualPermissions = operation.ActualPermissions
          ? operation.ActualPermissions
          : {
              Status: 200,
              Permissions: [
                {
                  Principal:
                    "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
                  Actions: [
                    "quicksight:DeleteDataSet",
                    "quicksight:UpdateDataSetPermissions",
                    "quicksight:PutDataSetRefreshProperties",
                    "quicksight:CreateRefreshSchedule",
                    "quicksight:CancelIngestion",
                    "quicksight:ListRefreshSchedules",
                    "quicksight:PassDataSet",
                    "quicksight:UpdateRefreshSchedule",
                    "quicksight:DeleteRefreshSchedule",
                    "quicksight:DescribeDataSetRefreshProperties",
                    "quicksight:DescribeDataSet",
                    "quicksight:CreateIngestion",
                    "quicksight:DescribeRefreshSchedule",
                    "quicksight:ListIngestions",
                    "quicksight:DescribeDataSetPermissions",
                    "quicksight:UpdateDataSet",
                    "quicksight:DeleteDataSetRefreshProperties",
                    "quicksight:DescribeIngestion",
                  ],
                },
              ],
              RequestId: "a4df2327-e02d-4706-8696-41c598d76fbe",
            };
        actualPermissions[element.QuicksightElementArnName] = element.QuicksightElementArnId;
        actualPermissions[element.QuicksightElementName] = element.QuicksightElementId;
        qsClientMock.on(element.DescribeCommand).resolves(actualPermissions);
        qsClientMock.on(element.UpdateCommand).resolves(element.Response);
        const responseData = "Dummy";
        const physicalResourceId = "Dummy";

        // Act
        const value = await handler(event, context);

        // Check
        expect(context.done).toBeCalledWith(200);
        expect(qsClientMock).toHaveReceivedCommandTimes(element.DescribeCommand, 1);
        expect(qsClientMock).toHaveReceivedCommandTimes(element.UpdateCommand, 1);
      });
    });
  });

  // second set of tests that will handle anything we could imagine as input for the handle.
  const testCaseScenarios = [
    {
      description:
        "this is a model of a scenario. please copy paste from here and replace properties to match the needs.",
      run: false, // false will skip the scenario, true will execute it
      describeCommand: DescribeTemplatePermissionsCommand, // replace by the actual command expected to be called.
      updateCommand: UpdateTemplatePermissionsCommand, // replace by the actual command expected to be called.
      event: {}, // replace by event data that will be sent to handle function.
      actualPermissions: {}, // replace by actual permissions object that will be returned by describe command.
      updateCommandResponse: {}, // replace by actual object that will be returned by update command.
      signedUrlResponse: {}, // replace by the response that should be returned from the url signed request
      expectedSignedUrlRequest: {}, // replace by the request that is expected to be made to the url signed request
      assertions: function (scenario, context, qsClientMock, value, capturedRequestBody) {}, // implement the assertions needed. DO NOT CHANGE signature.
    },
    {
      description: "should treat Template Create as expected",
      run: true,
      describeCommand: DescribeTemplatePermissionsCommand,
      updateCommand: UpdateTemplatePermissionsCommand,
      event: {
        ResponseURL: DEFAULT_SIGNED_URL,
        StackId: "arn:aws:cloudformation:us-east-1:123456789012:stack/my-stack/5d3078a0-d0c0-11ee-83ff-1209d5cd2055",
        RequestId: "f0a8339b-0f49-497c-a1f8-7e649ce6d52b",
        LogicalResourceId: "PruebaCustomResource",
        ResourceType: "Custom::QuicksightPermissions",
        ResourceProperties: {
          ServiceToken: "arn:aws:lambda:us-east-1:123456789012:function:my-service-token",
          TemplateId: "my-template-id",
          Permissions: [
            {
              Principals: [
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
              ],
              Actions: ["quicksight:DescribeDataSet", "quicksight:ListRefreshSchedules"],
            },
            {
              Principals:
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
              Actions: "quicksight:DescribeDataSet",
            },
          ],
        },
        RequestType: REQUEST_TYPE_CREATE,
        ServiceToken: "arn:aws:lambda:us-east-1:123456789012:function:my-service-token",
        PhysicalResourceId: "",
      },
      actualPermissions: {
        Status: 200,
        Permissions: [
          {
            Principal: "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/foo@bar.com",
            Actions: [
              "quicksight:UpdateRefreshSchedule",
              "quicksight:DeleteRefreshSchedule",
              "quicksight:DescribeDataSetPermissions",
              "quicksight:DescribeIngestion",
            ],
          },
        ],
        RequestId: "a4df2327-e02d-4706-8696-41c598d76fbe",
      },
      updateCommandResponse: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:theme/my-theme-id",
        DataSetId: "my-theme-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
      signedUrlResponse: { status: "SUCCESS" },
      expectedSignedUrlRequest: {
        Data: {Id: "my-template-id"},
        PhysicalResourceId: "template/my-template-id",
        LogicalResourceId: "PruebaCustomResource",
        StackId: "arn:aws:cloudformation:us-east-1:123456789012:stack/my-stack/5d3078a0-d0c0-11ee-83ff-1209d5cd2055",
        RequestId: "f0a8339b-0f49-497c-a1f8-7e649ce6d52b",
        Status: "SUCCESS",
      },
      assertions: function (scenario, context, qsClientMock, value, capturedRequestBody) {
        expect(context.done).toBeCalledWith(200);
        expect(qsClientMock).toHaveReceivedCommandTimes(scenario.describeCommand, 1);
        expect(qsClientMock).toHaveReceivedCommandTimes(scenario.updateCommand, 1);
      },
    },
    {
      description: "Check if we can call handler with 'Create' operation given the minimal mandatory arguments.",
      run: true,
      describeCommand: DescribeDataSetPermissionsCommand,
      updateCommand: UpdateDataSetPermissionsCommand,
      event: {
        RequestType: "Create",
        ServiceToken: "arn:aws:lambda:us-east-1:123456789012:function:my-service-token",
        ResponseURL: DEFAULT_SIGNED_URL,
        StackId: "arn:aws:cloudformation:us-east-1:123456789012:stack/my-stack/5d3078a0-d0c0-11ee-83ff-1209d5cd2055",
        RequestId: "f0a8339b-0f49-497c-a1f8-7e649ce6d52b",
        LogicalResourceId: "PruebaCustomResource",
        PhysicalResourceId: "prueba-custom-resource-PruebaCustomResource-I3AG5DQJ8C3F",
        ResourceType: "Custom::QuicksightPermissions",
        ResourceProperties: {
          ServiceToken: "arn:aws:lambda:us-east-1:123456789012:function:my-service-token",
          Permissions: [
            {
              Principals: [
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-other-author-user@foo.bar",
              ],
              Actions: ["quicksight:DescribeDataSet", "quicksight:ListIngestions"],
            },
            {
              Principals:
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
              Actions: "quicksight:DescribeDataSet",
            },
          ],
          DataSetId: "my-data-set-id",
        },
        OldResourceProperties: {
          ServiceToken: "arn:aws:lambda:us-east-1:123456789012:function:my-service-token",
          Permissions: [
            {
              Principals: [
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
              ],
              Actions: [
                "quicksight:DeleteDataSet",
                "quicksight:UpdateDataSetPermissions",
                "quicksight:PutDataSetRefreshProperties",
                "quicksight:CreateRefreshSchedule",
                "quicksight:CancelIngestion",
                "quicksight:PassDataSet",
                "quicksight:UpdateRefreshSchedule",
                "quicksight:DescribeDataSetPermissions",
                "quicksight:UpdateDataSet",
                "quicksight:DeleteDataSetRefreshProperties",
                "quicksight:DescribeIngestion",
              ],
            },
            {
              Principals:
                "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-3th-author-user@foo.bar",
              Actions: "quicksight:DescribeDataSet",
            },
          ],
          DataSetId: "my-data-set-id",
        },
      },
      actualPermissions: {
        Status: 200,
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:dataset/my-data-set-id",
        DataSetId: "my-data-set-id",
        Permissions: [
          {
            Principal:
              "arn:aws:quicksight:us-east-1:123456789012:user/default/QuickSight-Autor-Role/my-author-user@foo.bar",
            Actions: [
              "quicksight:DeleteDataSet",
              "quicksight:UpdateDataSetPermissions",
              "quicksight:PutDataSetRefreshProperties",
              "quicksight:CreateRefreshSchedule",
              "quicksight:CancelIngestion",
              "quicksight:ListRefreshSchedules",
              "quicksight:PassDataSet",
              "quicksight:UpdateRefreshSchedule",
              "quicksight:DeleteRefreshSchedule",
              "quicksight:DescribeDataSetRefreshProperties",
              "quicksight:DescribeDataSet",
              "quicksight:CreateIngestion",
              "quicksight:DescribeRefreshSchedule",
              "quicksight:ListIngestions",
              "quicksight:DescribeDataSetPermissions",
              "quicksight:UpdateDataSet",
              "quicksight:DeleteDataSetRefreshProperties",
              "quicksight:DescribeIngestion",
            ],
          },
        ],
        RequestId: "a4df2327-e02d-4706-8696-41c598d76fbe",
      },
      updateCommandResponse: {
        DataSetArn: "arn:aws:quicksight:us-east-1:123456789012:dataset/my-data-set-id",
        DataSetId: "my-data-set-id",
        Permissions: [
          {
            Principal: "STRING_VALUE",
            Actions: ["STRING_VALUE"],
          },
        ],
        RequestId: "STRING_VALUE",
        Status: 200,
      },
      signedUrlResponse: { status: "SUCCESS" },
      expectedSignedUrlRequest: {
        Data: { Id: "my-data-set-id"},
        PhysicalResourceId: "dataset/my-data-set-id",
        LogicalResourceId: "PruebaCustomResource",
        StackId: "arn:aws:cloudformation:us-east-1:123456789012:stack/my-stack/5d3078a0-d0c0-11ee-83ff-1209d5cd2055",
        RequestId: "f0a8339b-0f49-497c-a1f8-7e649ce6d52b",
        Status: "SUCCESS",
      },
      assertions: function (scenario, context, qsClientMock, value, capturedRequestBody) {
        expect(context.done).toBeCalledWith(200);
      },
    },
  ];
  testCaseScenarios.forEach((scenario) => {
    if (scenario.run) {
      it(`${scenario.description}`, async () => {
        // setup event data
        const context = {
          logStreamName: "logStreamName",
          done: jest.fn(),
        };
        qsClientMock.on(scenario.describeCommand).resolves(scenario.actualPermissions);
        qsClientMock.on(scenario.updateCommand).resolves(scenario.updateCommandResponse);
        let capturedRequestBody;
        const httpsResponse = scenario.httpsResponse; // Replace with your expected response
        nock(DEFAULT_SIGNED_URL_DOMAIN)
          .put(DEFAULT_SIGNED_URL_PATH) // Update this URL with the actual endpoint
          .reply(function (uri, requestBody) {
            // Capture the request body for later assertion
            capturedRequestBody = requestBody;
            return [200, httpsResponse];
          });
        scenario.event["TestDescription: "] = scenario.description;
        // Act
        const value = await handler(scenario.event, context);

        const signedUrlRequestBody = JSON.parse(capturedRequestBody);
        // Check
        expect(nock.isDone()).toBe(true); // Ensure that all mocked requests were made
        expect(signedUrlRequestBody).toEqual(scenario.expectedSignedUrlRequest);
        scenario.assertions(scenario, context, qsClientMock, value, signedUrlRequestBody);
      });
    }
  });
});
