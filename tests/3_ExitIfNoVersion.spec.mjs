import { describe, expect, it } from "./clown.mjs"
import { ExitIfNoVersion } from "../src/pipes/ExitIfNoVersion.mjs"

describe("ExitIfNoVersion", () => {
  it("should attempt to exit if there's no new version", () => {
    const check = () => ({ exit: true })
    const result = ExitIfNoVersion(check).run({
      latestVersion: "1.0.0",
      newVersion: "1.0.0",
    })

    expect(result.exit).toEqual(true)
  })
})
