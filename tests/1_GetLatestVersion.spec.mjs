import { GetLatestVersion } from "../src/pipes/GetLatestVersion.mjs"
import { describe, expect, it } from "./clown.mjs"

describe("GetLatestVersion", () => {
  it("should attempt to extract previous version", () => {
    expect(GetLatestVersion(() => "1.0.0").run().latestVersion).toEqual(
      "1.0.0",
    )
  })
})
