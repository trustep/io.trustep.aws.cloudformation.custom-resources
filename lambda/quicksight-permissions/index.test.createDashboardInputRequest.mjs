import { createDashboardInputRequest } from "./index.mjs"; // Import the handler function from the original code

import { describe, expect } from "@jest/globals";

describe('createDashboardInputRequest ', () => {
  test('should correctly create an object with all properties when all parameters are provided', () => {
    const awsAccountId = 'test-account';
    const quicksightElementName = 'DashboardId';
    const quicksightElementId = 'test-element-id';
    const grants = [{ Principal: 'user', Actions: ['read'] }];
    const revokes = [{ Principal: 'user', Actions: ['write'] }];
    const linkGrants = [{ Principal: 'user', Actions: ['link-read'] }];
    const linkRevokes = [{ Principal: 'user', Actions: ['link-write'] }];

    const result = createDashboardInputRequest(
      awsAccountId,
      quicksightElementName,
      quicksightElementId,
      grants,
      revokes,
      linkGrants,
      linkRevokes
    );

    expect(result).toEqual({
      AwsAccountId: awsAccountId,
      DashboardId: quicksightElementId,
      GrantPermissions: grants,
      RevokePermissions: revokes,
      GrantLinkPermissions: linkGrants,
      RevokeLinkPermissions: linkRevokes,
    });
  });

  test('should throw an error when mandatory parameters are missing', () => {
    const awsAccountId = undefined;
    const quicksightElementName = 'DashboardId';
    const quicksightElementId = undefined; // Mandatory parameter missing

    expect(() => {
      createDashboardInputRequest(
        awsAccountId,
        quicksightElementName,
        quicksightElementId
      );
    }).toThrow('awsAccountId is mandatory!');
  });

  test('should correctly create an object with only the mandatory properties when optional parameters are not provided', () => {
    const awsAccountId = 'test-account';
    const quicksightElementName = 'DashboardId';
    const quicksightElementId = 'test-element-id';

    const result = createDashboardInputRequest(
      awsAccountId,
      quicksightElementName,
      quicksightElementId
    );

    expect(result).toEqual({
      AwsAccountId: awsAccountId,
      DashboardId: quicksightElementId,
    });
  });
});