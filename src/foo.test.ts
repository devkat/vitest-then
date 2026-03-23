import { assert, describe, it } from "vitest";
import * as foo from "./foo.js";

describe("foo", () => {
  it("should not hang", () => {
    assert.strictEqual(foo.then(1), 1);
  });
});
