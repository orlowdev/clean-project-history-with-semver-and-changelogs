import { ExtendPipe } from "../Pipe.mjs"

/**
 * git-rev-list - Lists commit objects in reverse chronological order.
 * @see https://git-scm.com/docs/git-rev-list
 *
 * * --oneline
 * This is a shorthand for "--pretty=oneline --abbrev-commit".
 *
 * * --abbrev-commit
 * Instead of showing the full 40-byte hexadecimal commit object name,
 * show only a partial prefix.
 *
 * * --pretty=oneline
 * Pretty-print the contents of the commit logs in one line.
 */
export const GetChanges = exec =>
  ExtendPipe(({ latestVersionCommit }) => ({
    changes: exec(`git rev-list ${latestVersionCommit}..HEAD --oneline`)
      .split("\n")
      .reverse()
      .map(change => change.slice(change.indexOf(" ") + 1)),
  }))
