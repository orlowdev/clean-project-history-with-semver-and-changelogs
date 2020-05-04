import { execSync } from "child_process"
import { execWith } from "./execWith.mjs"
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { MakeNewVersion } from "./pipes/MakeNewVersion.mjs"
import { ExitIfNoVersion } from "./pipes/ExitIfNoVersion.mjs"
import { GetVersionCommit } from "./pipes/GetVersionCommit.mjs"
import { Log } from "./pipes/Log.mjs"

const argv = process.argv.slice(2)

const conventions = {
  patch: "^:bug: ",
  minor: "^:sparkles: ",
  major: "^:boom: ",
}

const execOrElse = execWith(execSync)
const execOrExit = execOrElse(e => {
  console.error(e.message || e)
  process.exit(1)
})

GetLatestVersion(execOrElse(() => "0.0.0"))
  .concat(MakeNewVersion)
  .concat(ExitIfNoVersion(() => process.exit(0)))
  .concat(GetVersionCommit(execOrExit))
  .concat(Log(console.log))
  .run({ argv })
