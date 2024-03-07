import { createUpdateInputRequest } from "./index.mjs"; // Import the handler function from the original code

import { describe, expect, it } from "@jest/globals";

describe("createUpdateInputRequest ", () => {
  it("should correctly create an input object with the provided parameters", () => {
    const awsAccountId = "123456789012";
    const quicksightElementName = "DashboardId";
    const quicksightElementId = "dashboard-123";
    const grants = [
      { Principal: "user-123", Actions: ["quicksight:DescribeDashboard"] },
    ];
    const revokes = [
      { Principal: "user-456", Actions: ["quicksight:ListDashboards"] },
    ];

    const expected = {
      AwsAccountId: awsAccountId,
      DashboardId: quicksightElementId,
      GrantPermissions: grants,
      RevokePermissions: revokes,
    };

    const result = createUpdateInputRequest(
      awsAccountId,
      quicksightElementName,
      quicksightElementId,
      grants,
      revokes
    );
    expect(result).toEqual(expected);
  });

  it("should correctly handle the case when `grants` and `revokes` parameters are not provided", () => {
    const awsAccountId = "123456789012";
    const quicksightElementName = "DashboardId";
    const quicksightElementId = "dashboard-123";

    const expected = {
      AwsAccountId: awsAccountId,
      DashboardId: quicksightElementId,
    };

    const result = createUpdateInputRequest(
      awsAccountId,
      quicksightElementName,
      quicksightElementId
    );
    expect(result).toEqual(expected);
  });

  it("should throw an error when `awsAccountId`, `quicksightElementName`, and `quicksightElementId` parameters are not provided", () => {
    expect(() => {
      createUpdateInputRequest();
    }).toThrow();
  });
  it("should throw an error when `quicksightElementName`, and `quicksightElementId` parameters are not provided", () => {
    const awsAccountId = "123456789012";
    expect(() => {
      createUpdateInputRequest(awsAccountId);
    }).toThrow();
  });
  it("should throw an error when `quicksightElementId` parameters are not provided", () => {
    const awsAccountId = "123456789012";
    const quicksightElementName = "DashboardId";
    expect(() => {
      createUpdateInputRequest(awsAccountId, quicksightElementName);
    }).toThrow();
  });
  it("should throw an error when `quicksightElementName` parameter is invalid", () => {
    const awsAccountId = "123456789012";
    const quicksightElementName = "FooBar";
    const quicksightElementId = "dashboard-123";
    expect(() => {
      createUpdateInputRequest(awsAccountId, quicksightElementName, quicksightElementId);
    }).toThrow();
  });

  const quicksightElementNames = [
    "AnalysisId",
    "DashboardId",
    "DataSetId",
    "DataSourceId",
    "FolderId",
    "TemplateId",
    "ThemeId",
    "TopicId",
  ];

  quicksightElementNames.forEach((elementName) => {
    it(`should construct an object with quicksightElementName=${elementName}`, () => {
      const awsAccountId = `test-account-${elementName}`;
      const quicksightElementId = `test-element-id-${elementName}`;

      const result = createUpdateInputRequest(
        awsAccountId,
        elementName,
        quicksightElementId
      );

      expect(result).toEqual({
        AwsAccountId: awsAccountId,
        [elementName]: quicksightElementId,
      });
    });
  });
})