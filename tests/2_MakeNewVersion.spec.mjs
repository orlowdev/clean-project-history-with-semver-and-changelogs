import { MakeNewVersion } from "../src/pipes/MakeNewVersion.mjs"
import { describe, expect, it } from "./clown.mjs"

describe("MakeNewVersion", () => {
  it("should bump appropriate version if option is set", () => {
    const patchUpdate = MakeNewVersion.run({
      latestVersion: "1.0.0",
      argv: ["--patch"],
    })

    const minorUpdate = MakeNewVersion.run({
      latestVersion: "2.3.5",
      argv: ["--patch", "--minor"],
    })

    const majorUpdate = MakeNewVersion.run({
      latestVersion: "7.15.32",
      argv: ["--patch", "--minor", "--major"],
    })

    expect(patchUpdate.newVersion).toEqual("1.0.1")
    expect(minorUpdate.newVersion).toEqual("2.4.0")
    expect(majorUpdate.newVersion).toEqual("8.0.0")
  })
})
