import { describe, expect, it } from "./clown.mjs"
import { ForceBump } from "../src/pipes/ForceBump.mjs"

describe("ForceBump", () => {
  it("should force version bumping if necessary", () => {
    const result = ForceBump.run({
      changes: ["some commit", "fix: an error", "bc: remove all code"],
      argv: [],
      conventions: {
        patch: "^fix: ",
        minor: "^feat: ",
        major: "^bc: ",
      },
    })

    expect(result.argv).toEqual(["--patch", "--major"])
  })
})
