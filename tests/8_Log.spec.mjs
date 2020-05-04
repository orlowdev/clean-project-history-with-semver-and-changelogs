import { Log } from "../src/pipes/Log.mjs"
import { describe, expect, it } from "./clown.mjs"

describe("Log", () => {
  it("should use provided function to log version if there's no changelog", () => {
    const result = Log(x => ({ logged: x })).run({
      newVersion: "1.0.0",
      changelog: "",
    })

    expect(result.logged).toEqual("1.0.0")
  })

  it("should use provided function to log changelog if it is present", () => {
    const result = Log(x => ({ logged: x })).run({
      newVersion: "1.0.0",
      changelog: "Harness some changes",
    })

    expect(result.logged).toEqual("Harness some changes")
  })
})
