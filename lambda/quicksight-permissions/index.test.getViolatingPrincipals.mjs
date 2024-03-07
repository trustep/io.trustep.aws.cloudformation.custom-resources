import { getViolatingPrincipals } from "./index.mjs"; // Import the handler function from the original code

import { describe, expect, it } from "@jest/globals";
import assert from "assert";

describe("getViolatingPrincipals ", () => {
  it("should return the overlapping principals between the actual and desired permissions, excluding the old permissions", function () {
    const actualPerms = {
      Permissions: [{ Principal: "user1" }, { Principal: "user2" }],
    };
    const desiredPerms = { Permissions: [{ Principals: ["user2", "user3"] }] };
    const oldPerms = { Permissions: [{ Principals: ["user3"] }] };
    const expected = ["user2"];
    assert.deepStrictEqual(
      getViolatingPrincipals(actualPerms, desiredPerms, oldPerms),
      expected
    );
  });

  it("should return an empty array if there are no overlapping principals", function () {
    const actualPerms = { Permissions: [{ Principal: "user1" }] };
    const desiredPerms = { Permissions: [{ Principals: ["user2"] }] };
    const oldPerms = { Permissions: [{ Principals: ["user3"] }] };
    const expected = [];
    assert.deepStrictEqual(
      getViolatingPrincipals(actualPerms, desiredPerms, oldPerms),
      expected
    );
  });

  it("should handle the case where the old permissions are not provided", function () {
    const actualPerms = {
      Permissions: [{ Principal: "user1" }, { Principal: "user2" }],
    };
    const desiredPerms = { Permissions: [{ Principals: ["user2", "user3"] }] };
    const expected = ["user2"];
    assert.deepStrictEqual(
      getViolatingPrincipals(actualPerms, desiredPerms, null),
      expected
    );
  });

  it("should return an empty array if both actualPerms and desiredPerms have no permissions", function () {
    const actualPerms = { Permissions: [] };
    const desiredPerms = { Permissions: [] };
    const oldPerms = { Permissions: [{ Principals: ["user3"] }] };
    const expected = [];
    assert.deepStrictEqual(
      getViolatingPrincipals(actualPerms, desiredPerms, oldPerms),
      expected
    );
  });

  it("should return the overlapping principals between actualPerms and desiredPerms when oldPerms is not provided", function () {
    const actualPerms = {
      Permissions: [{ Principal: "user1" }, { Principal: "user2" }],
    };
    const desiredPerms = { Permissions: [{ Principals: ["user2", "user3"] }] };
    const expected = ["user2"];
    assert.deepStrictEqual(
      getViolatingPrincipals(actualPerms, desiredPerms, null),
      expected
    );
  });

  it("should return the overlapping principals between actualPerms and desiredPerms when all inputs have single principals", function () {
    const actualPerms = {
      Permissions: [{ Principal: "user1" }],
    };
    const desiredPerms = { Permissions: [{ Principals: ["user1"] }] };
    const oldPerms = { Permissions: [{ Principals: ["user2"] }] };
    const expected = ["user1"];
    assert.deepStrictEqual(
      getViolatingPrincipals(actualPerms, desiredPerms, oldPerms),
      expected
    );
  });
  it("should return the overlapping principals between actualPerms and desiredPerms when all inputs have single principals", function () {
    const actualPerms = {
      Permissions: [{ Principal: "user1" }],
    };
    const desiredPerms = { Permissions: [{ Principals: "user1" }] };
    const oldPerms = { Permissions: [{ Principals: "user2" }] };
    const expected = ["user1"];
    assert.deepStrictEqual(
      getViolatingPrincipals(actualPerms, desiredPerms, oldPerms),
      expected
    );
  });
});
