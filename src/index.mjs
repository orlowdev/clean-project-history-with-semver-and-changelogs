import { execSync } from "child_process"
import { execWith } from "./execWith.mjs"
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { MakeNewVersion } from "./pipes/MakeNewVersion.mjs"
import { Log } from "./pipes/Log.mjs"

const argv = process.argv.slice(2)

const conventions = {
  patch: "^:bug: ",
  minor: "^:sparkles: ",
  major: "^:boom: ",
}

const execOrElse = execWith(execSync)

GetLatestVersion(execOrElse(() => "0.0.0"))
  .concat(MakeNewVersion)
  .concat(Log(console.log))
  .run({ argv })
