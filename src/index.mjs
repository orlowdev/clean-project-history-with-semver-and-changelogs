import { execSync } from "child_process"
import { execWith } from "./execWith.mjs"
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { Log } from "./pipes/Log.mjs"

const conventions = {
  patch: "^:bug: ",
  minor: "^:sparkles: ",
  major: "^:boom: ",
}

const execOrElse = execWith(execSync)

GetLatestVersion(execOrElse(() => "0.0.0"))
  .concat(Log(console.log))
  .run()
