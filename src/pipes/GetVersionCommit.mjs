import { ExtendPipe } from "../Pipe.mjs"

/**
 * git-rev-list - Lists commit objects in reverse chronological order.
 * @see https://git-scm.com/docs/git-rev-list
 *
 * * --max-parents=0
 * Show only commits which have at least (or at most) that many parent
 * commits. In particular, --max-parents=0 gives all root commits.
 *
 * @warning If your repository contains multiple unrelated histories
 * merged together, the `git rev-list --max-parents=0 HEAD` command
 * will return you more than one commit.
 *
 * ====================================================================
 *
 * git-show-ref - List references in a local repository
 * @see https://git-scm.com/docs/git-show-ref.
 *
 * * --hash
 * Only show the SHA-1 hash, not the reference name.
 */
export const GetVersionCommit = (
  execOnNoTags,
  execOnTags = execOnNoTags,
) =>
  ExtendPipe(({ latestVersion }) => ({
    latestVersionCommit:
      latestVersion == "0.0.0"
        ? execOnNoTags("git rev-list --max-parents=0 HEAD")
        : execOnTags(`git show-ref ${latestVersion} -s`),
  }))
