import { execWith } from "../src/execWith.mjs"
import { describe, expect, it } from "./clown.mjs"

describe("execWith", () => {
  it("should return the result of computation if it was successful", () => {
    expect(execWith(x => x)()("hello")).toEqual("hello")
  })

  it("should return the result of onError handler if exec failed", () => {
    expect(
      execWith(m => {
        throw new Error(m)
      })(e => e.message)("such unexpected"),
    ).toEqual("such unexpected")
  })
})
