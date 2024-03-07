import { validateResourceProperties } from "./index.mjs"; // Import the handler function from the original code

import { describe, expect } from "@jest/globals";

describe('validateResourceProperties ', () => {
  it('should throw an error when none of the `quicksightElementNames` are found in the properties', () => {
    const properties = { unrelatedProperty: 'value' };
    expect(() => validateResourceProperties(properties)).toThrow(
      "One of the AnalysisId, DashboardId, DataSetId, DataSourceId, FolderId, TemplateId, ThemeId or TopicId properties should be defined."
    );
  });

  it('should throw an error when more than one of the `quicksightElementNames` are found in the properties', () => {
    const properties = { AnalysisId: '123', DashboardId: '456' };
    expect(() => validateResourceProperties(properties)).toThrow(
      "Only one of the AnalysisId, DashboardId, DataSetId, DataSourceId, FolderId, TemplateId, ThemeId or TopicId properties should be defined."
    );
  });

  it('should not throw an error when exactly one of the `quicksightElementNames` is found in the properties', () => {
    const properties = { DashboardId: '123' };
    expect(() => validateResourceProperties(properties)).not.toThrow();
  });
});