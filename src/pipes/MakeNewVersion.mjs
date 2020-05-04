import { ExtendPipe } from "../Pipe.mjs"

const splitVersionToNumbers = ({ latestVersion }) => ({
  newVersion: latestVersion.split(".").map(Number),
})

const joinVersionNumbers = ({ newVersion }) => ({
  newVersion: newVersion.join("."),
})

const bump = (option, bumpFunc) => ({ newVersion, argv }) => ({
  newVersion: argv.includes(option) ? bumpFunc(newVersion) : newVersion,
})

export const MakeNewVersion = ExtendPipe(
  splitVersionToNumbers,
  bump("--patch", tuple => [tuple[0], tuple[1], tuple[2] + 1]),
  bump("--minor", tuple => [tuple[0], tuple[1] + 1, 0]),
  bump("--major", tuple => [tuple[0] + 1, 0, 0]),
  joinVersionNumbers,
)
