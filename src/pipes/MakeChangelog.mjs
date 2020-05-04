import { ExtendPipe } from "../Pipe.mjs"
import { testConvention } from "../utils.mjs"

const trimType = convention => change =>
  change.replace(new RegExp(convention), "")

const getMatchingChanges = (convention, changes) =>
  changes.filter(testConvention(convention)).map(trimType(convention))

const writeToChangelog = (title, items) =>
  items.length
    ? `\n## ${title}\n\n${items
        .map(change => `* ${change}\n`)
        .join("")}`
    : ""

const changelogTag = (_, version, breaks, features, fixes) =>
  `# ${version}\n`
    .concat(writeToChangelog("Breaking Changes", breaks))
    .concat(writeToChangelog("Features & Deprecations", features))
    .concat(writeToChangelog("Bug Fixes", fixes))

export const MakeChangelog = ExtendPipe(
  ({ changes, newVersion, conventions }) => ({
    changelog: changelogTag`
  # ${newVersion}

  ## Breaking Changes
  ${getMatchingChanges(conventions.major, changes)}

  ## Features & Deprecations
  ${getMatchingChanges(conventions.minor, changes)}

  ## Bug Fixes
  ${getMatchingChanges(conventions.patch, changes)}
`,
  }),
)
