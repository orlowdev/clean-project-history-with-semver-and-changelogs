import { describe, expect, it } from "./clown.mjs"
import { GetVersionCommit } from "../src/pipes/GetVersionCommit.mjs"

describe("GetVersionCommit", () => {
  it("should extract initial commit on no tags", () => {
    const result = GetVersionCommit(() => "abc1234").run({
      latestVersion: "0.0.0",
    })
    expect(result.latestVersionCommit).toEqual("abc1234")
  })

  it("should extract commit of the latest version", () => {
    const result = GetVersionCommit(
      () => "never",
      () => "abc1234",
    ).run({ latestVersion: "1.0.0" })
    expect(result.latestVersionCommit).toEqual("abc1234")
  })
})
