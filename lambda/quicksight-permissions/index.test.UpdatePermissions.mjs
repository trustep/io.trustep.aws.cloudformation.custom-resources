import {
  UpdateAnalysisPermissions,
  UpdateDashboardPermissions,
  UpdateDataSetPermissions,
  UpdateDataSourcePermissions,
  UpdateFolderPermissions,
  UpdateTemplatePermissions,
  UpdateThemePermissions,
  UpdateTopicPermissions,
} from "./index.mjs";
import { QuickSightClient } from "@aws-sdk/client-quicksight";

import { jest, describe, expect } from "@jest/globals";

// Mock the QuickSightClient
const mockQuickSightClient = {
  send: jest.fn(),
};

jest.mock("@aws-sdk/client-quicksight", () => {
  return {
    QuickSightClient: jest.fn(() => mockQuickSightClient),
  };
});

const testCases = [
  {
    method: UpdateAnalysisPermissions,
    args: ["awsAccountId", "quicksightElementId", [], []],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
  {
    method: UpdateDashboardPermissions,
    args: [
      "awsAccountId",
      "quicksightElementId",
      { Actions: [], Principal: "PrincipalArn" },
      { Actions: [], Principal: "PrincipalArn" },
      { Actions: [], Principal: "PrincipalArn" },
      { Actions: [], Principal: "PrincipalArn" },
    ],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
  {
    method: UpdateDataSetPermissions,
    args: ["awsAccountId", "quicksightElementId", [], []],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
  {
    method: UpdateDataSourcePermissions,
    args: ["awsAccountId", "quicksightElementId", [], []],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
  {
    method: UpdateFolderPermissions,
    args: ["awsAccountId", "quicksightElementId", [], []],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
  {
    method: UpdateTemplatePermissions,
    args: ["awsAccountId", "quicksightElementId", [], []],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
  {
    method: UpdateThemePermissions,
    args: ["awsAccountId", "quicksightElementId", [], []],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
  {
    method: UpdateTopicPermissions,
    args: ["awsAccountId", "quicksightElementId", [], []],
    mockResponse: {
      AnalysisArn: "testArn",
      AnalysisId: "testId",
      Permissions: [],
      RequestId: "testRequestId",
      Status: 200,
    },
    expectedStatus: 200,
    errorMessage: "awsAccountId is mandatory!",
  },
];

describe("PermissionsUpdate ", () => {
  beforeEach(() => {
    mockQuickSightClient.send.mockClear();
  });

  testCases.forEach((testCase) => {
    it(`should update permissions successfully when valid parameters are provided for ${testCase.method.name}`, async () => {
      const mockSend = jest.fn().mockResolvedValue(testCase.mockResponse);
      QuickSightClient.prototype.send = mockSend;

      const response = await testCase.method(...testCase.args);
      expect(response.Status).toEqual(testCase.expectedStatus);
      expect(mockSend).toHaveBeenCalledTimes(1);
    });

    it(`should throw an error when invalid parameters are provided for ${testCase.method.name}`, async () => {
      const mockSend = jest.fn();
      QuickSightClient.prototype.send = mockSend;
      await expect(testCase.method(null, null, null, null)).rejects.toThrow(
        testCase.errorMessage
      );
      expect(mockSend).not.toHaveBeenCalled();
    });

    it(`should throw an error when mandatory parameters are missing for ${testCase.method.name}`, async () => {
      const mockSend = jest.fn();
      QuickSightClient.prototype.send = mockSend;

      await expect(
        testCase.method(undefined, "quicksightElementId", [], [])
      ).rejects.toThrow("awsAccountId is mandatory!");
      await expect(
        testCase.method("awsAccountId", undefined, [], [])
      ).rejects.toThrow("quicksightElementId is mandatory!");
      expect(mockSend).not.toHaveBeenCalled();
    });
  });
});
