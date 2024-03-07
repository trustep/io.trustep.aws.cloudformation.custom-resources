import { getQuicksightElementId, quicksightElementNames } from "./index.mjs"; // Import the handler function from the original code

import { describe, expect, it } from "@jest/globals";

describe("getQuicksightElementId ", () => {
  it("should return null when no quicksight element name is found in properties", () => {
    const properties = {};
    const result = getQuicksightElementId(properties);
    expect(result).toBeNull();
  });
  it('should return null when properties object has no keys', () => {
    const properties = {};
    const result = getQuicksightElementId(properties);
    expect(result).toBeNull();
  });

  quicksightElementNames.forEach((elementName) => {
    test(`should return the quicksight element id when a ${elementName} is found in properties`, () => {
      const elementId = elementName + "-123"
      const properties = {};
      properties[elementName] = elementId;
      const result = getQuicksightElementId(properties);
      expect(result).toEqual(elementId);
    });
  });
});
