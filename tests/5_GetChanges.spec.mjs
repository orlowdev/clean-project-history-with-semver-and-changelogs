import { describe, expect, it } from "./clown.mjs"
import { GetChanges } from "../src/pipes/GetChanges.mjs"

describe("GetChanges", () => {
  it("should create proper command based on the latest version commit", () => {
    const result = GetChanges(x => x).run({
      latestVersionCommit: "abc1234",
    })
    expect(result.changes).toEqual(["rev-list abc1234..HEAD --oneline"])
  })

  it("should extract an array of changes in chronological order", () => {
    const getChanges = () =>
      "abc1234 some commit\nabc1235 fix: an error\nabc1236 bc: remove all code"
    const result = GetChanges(getChanges).run({})
    expect(result.changes).toEqual([
      "bc: remove all code",
      "fix: an error",
      "some commit",
    ])
  })
})
