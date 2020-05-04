import { MakeChangelog } from "../src/pipes/MakeChangelog.mjs"
import { describe, expect, it } from "./clown.mjs"

describe("MakeChangelog", () => {
  it("should create a changelog", () => {
    const result = MakeChangelog.run({
      changes: ["some commit", "fix: an error", "bc: remove all code"],
      newVersion: "1.0.1",
      conventions: {
        patch: "^fix: ",
        minor: "^feat: ",
        major: "^bc: ",
      },
    })

    expect(result.changelog).toEqual(
      "# 1.0.1\n\n## Breaking Changes\n\n* remove all code\n\n## Bug Fixes\n\n* an error\n",
    )
  })
})
