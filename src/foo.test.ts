import { assert, describe, it } from "vitest";
import * as foo from "./foo.js";

describe("foo", () => {
  it("should not hang when calling then", () => {
    assert.strictEqual(foo.then(1), 1);
  });

  it("should not hang when just importing then", () => {
    assert.strictEqual(foo.f(1), 1);
  });
});
