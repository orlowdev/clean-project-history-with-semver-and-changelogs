# Teacher's Notes

## Slide 1

Hello, this is the first workshop hosted by Raini.dev. Today we're going to talk about versioning. During the workshop, we'll cover some theory and play around with functions to put the theory to life. The workshop does not require you to have deep knowledge of all the things but it assumes that you have basic understanding of how to commit and push to Git as well as basic knowledge of JavaScript (ES6 and beyond).

## Slide 2

So, my name is Sergei. I am a Solution Architect. I mean, I develop docs. Follow me on Twitter, Instagram and GitHub if you like. The QR codes are trustworthy.

## Slide 3

I'd like to make a short introduction into what Raini.dev is. We once noticed that there are a lot of resources teaching people how to enter IT. But when it comes to some more advanced topics, they are either scattered across the world or burried in minds of experienced developers. Or both. So we came up with this idea of creating a space where exeprienced people can collaboratively share their experience in software development and all the related stuff. A video knowledge base, if you like. And instead of making a collection of good books no one has time to read, we would prefer to create global knowledge sharing. That obviously sounds easier than a list of good books.

We thought that workshops are the perfect format that can be very specific in its topic yet provides just enough time to cover it in full.

Raini.dev is free and open source, so if you have experience in some topics or want to conduct a workshop in the instructor role (this is what I am doing here right now), feel free to join the collaboration. You can PM me on all those social networks I've mentioned or ask me in the end of the workshop if you're interested.

## Slide 4

So, let's jump into our agenda.

We'll first discuss what versioning is, where to store versions, what kind of versions there are and see some examples. We'll put some stress on Semantic Versioning as it is stated in the title of the workshop.

We'll then deep-dive into changelogs and the purpose of using them. We'll start from the **Keep a Changelog** convention and then simplify it a bit.

After that, we'll look at commit conventions and see how they can help us version and log our changes.

Finally, we'll define the right time to raise our versions and look at how we can maintain multiple versioning flows at the same time.

## Slide 5

Let's start with defining what versioning is. Wikipedia states, that "Software upgrade versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software". From this definition, let's try to deduce what a version is.

- versions MUST be unique
- they MUST point to unique states of computer software. In other words, a version is an immutable pointer to unique state
- there MUST NOT be several versions pointing at the same state of the software

That's it. But I'd like to add one more item from myself so that our versions are nicer:

- versions MUST be human-readable

With all of this, we can say that a version is a human-readable unique immutable pointer to a specific unique state of the computer software.

## Slide 6

Look at the suggested items and say which of these happened first.

True, there might be some cryptography going on but the fact remains the same - the commit hash does not provide any meaningful description of when and what happened.

Now, take a look at these two. Which one happened first? OK, at least, we're getting somewhere.

## Slide 7

Now, where should we store versions?

A version control system sounds like the right place. But that does not answer the question.

We can't consider branches as they are mutable and they do not guarantee unique state.

We can't use commits because they are not human readable. Let's take a look at a simple example.

So, what is the right place for versions? Tags. Yes, they perfectly fit. You may know already that a tag is another way to create a new HEAD reference. So, we essentially create an immutable branch that has a tip hardset to current commit. And this reference cannot be changed. Plus, it can be assigned a message that will also be bound to it. Moreover, if you use GitHub or GitLab, they both provide a special entity called Release that wraps a git tag and provides a dedicated UI section for them.

## Slide 8

There are many approaches to versioning. We'll refer to them as versioning schemes. At the top level, they can be split into versioning by names or versioning by numbers. Examples of versioning by name are `macOS Catalina` or `ubuntu Bionic Beaver`. These are out of scope because they are mostly non-unique (`macOS Catalina` is equaly 10.16 and 10.16.\*).

What is more unique (but not always unique) - Date of Release versioning scheme. See the following examples.

As for sequence-based versions, they are the most compatible with uniqueness.

## Slide 9

Behold Semantic Versioning - the pinnacle of sequence-based versioning. It's as much the pinnacle of versioning as humans are the pinnacle of creation - viewpoints may vary.

In this workshop we are going to cover Semantic Version 2.0.0 - the latest version available at the moment.

Semantic Versioning was first described by Tom Preston-Werner, cofounder of GitHub. Take a look at the original docs at semver.org lying behind the QR code, if you need more details.

To put it simple, under this scheme, version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to the next. The convention suggests a MAJOR version (X), a MINOR version (Y) and a PATCH version (Z) bound together and separated from each other using a dot. We'll go through them right-to-left.

## Slide 10

To put it straight, we MUST bump (or, raise by one) our PATCH version if our changes contain only backward-compatible bug fixes. Or, simply, if we have a version 1.2.3 already and we added a bug fix and a ton of documentation unrelated to the source code directly, at the time of version evaluation, your next version MUST be 1.2.4.

## Slide 11

MINOR MUST be bumped if we either introduce new, backward-compatible functionality to the public API OR mark any of public API functionality as deprecated. It MAY be bumped if substantial new functionality/improvements introduced in the private code. MINOR bump resets PATCH version to 0. MINOR bump MAY include changes suitable for PATCH bump.

## Slide 12

MAJOR MUST be bumped if any backward-incompatible changes are introduced to the public API. It resets PATCH and MINOR versions to 0. It MAY include changes suitable for PATCH and/or MINOR bump.

## Slide 13

This is the extract from Keep a Changelog. Read it or skip it, shortly it states that changelog displays important changes from version to version in chronological order.

I think, we can make a more succinct version of it.

## Slide 14

Changelog is a place where one can see important changes from version to version in chronological order. It shouldn't necessarily be a file. Remember, I told you about dedicated UI part for releases in GitHub and GitLab?

From a changelog we should be able to see what is in fact going on (if anything).

And, yes, people do need changelogs. The value of them is applicable in many ways. If you use open source package and it stopped working after update - you hope to see what exactly was changed. If you are a user and you can't see a button that you've liked so much - you should be informed where did the button go. If customers pay you subscription fee, you should feel be responsible for letting them know what they are paying for. I could go on and on, but let's move on, shall we?

## Slide 15

Now, we need a place to get the changes from. And we need to understand which of them are important and which of them are "Remove node_modules from git repository". For most projects, the source of truth goes down the ladder:

- Jira tickets. Yay! Well, they can effectively be Trello tickets or "any-other-tool" tickets.
- Changes in PRs. Yes, that's more of a real history. But PRs are burried under tons of other PRs.
- Changes in commits. These ones are the most accurate. But they are so hard to follow. It would be nice if every commit described what exactly it does in its message.
- Commit messages. Nobody trusts them, right? I mean, a developer can write anything there. Well, if you think so - you've probably come to the right workshop.

Well, nonetheless. This is what we commonly have. And what happens next is:

## Slide 16

I have seen it so many times. Those numbers are diligently precise and equally meaningless. Why do they even call them versions? Aren't they just sprint numbers? Anyway, we've got a way to fix this. We just need to accept one simple fact - if a developer can write ANYTHING in the commit message and it cannot be shown to the customer - the developer can do the same in the code. Thus, it cannot be shown to the customer. Pull all tickets to "On Hold", you all now quit your jobs.

And if this trick didn't work on you, there is a better way.

## Slide 17

It's all the same but the commit messages are the shallow water. Leave management stuff to the management. The stories and tasks only describe what needs to be done. They do not DO it.

Believe me, everyone can make it this way. The only thing you need is to establish some conventions.

## Slide 18

There are widely adopted conventions that are nice and neat and easy to follow. These two are `Conventional Commits` and `Gitmoji`. Just pick the one you feel more appealing and stick to it. And if widely adopted ones do not fit, you can create your own one. They can cover anything you like but what I highly recommend is to impose the requirements that convey the versioning scheme of your choice.

## Slide 19

If you create a convention yourself, it's up to you to decide what you are going to adopt. The only thing you need to remember is that the commit MUST define what TYPE of change is made, as well as what the CHANGE was itself. The distilled version of it is:

- Commit MAY have a type
- Type MAY be ANY string that is adopted
- Commit type MUST be one of the adopted strings

Specifically for Semantic Versioning, adopted types MUST cover:

- Fixes
- Features
- Deprecations
- Breaking changes
- [OPTIONAL] Substantial internal updates

## Slide 20

As for the changes, they are for the changelog that we'll produce.

- Commit MUST have a short description
- Commit MAY provide additional long description in the body
- Commit MAY reference an issue at the bottom line (this is widely supported)

## Slide 21

When we talk about versioning, we don't only mean releases. Apart from all the nuances, the code can reside in one of three states - it is being developed, being tested or it's 10 minutes to sprint demo. For each of these, there might be a suitable version. Obviously, the deliverable version is the final one.

But we can also tag release candidates for testing.

And dev artifacts for development.

It doesn't go under the accepted pattern of X.Y.Z, right?

## Slide 22

Let's go back in time and look at our new friend SemVer.

Apart from X.Y.Z, Semantic Versioning inf fact outlines states that we can use for our advantage. The following slides will provide a use case but the convention can be used in so many more different ways.

## Slice 23

Semantic Versioning Pre-Releases.

MAY be denoted by appending a hyphen and a series of dot separated identifiers

- MUST - comprise only ASCII alphanumeric characters or hyphen [0-9A-Za-z-]+
- MUST - follow PATCH version number
- MUST NOT - be empty if specified
- MUST NOT - include leading zeroes

## Slide 24

Semantic Versioning Build Metadata. In fact, it is meant to be used differently, but we're talking about a thing no one has ever done properly so maybe this way people will.

MAY be denoted by appending a plus sign and a series of dot separated identifiers

MUST - comprise only ASCII alphanumeric characters or hyphen [0-9A-Za-z-]+
MUST - follow Pre-Release definition if it is denoted
MUST - be ignored when determining version precedence
MUST NOT - be empty if specified
MUST NOT - include leading zeroes

Now, when another team comes to you and asks your code as it's their dependency, you can safely give them a tag and continue to `develop`, `master` or what have you, and you'll never break their code.

## Slide 25

Well, in fact, even if we have parallel versioning flows, they still unite in a single conveyor. This is what it might look like.

## Slide 26

Now, let's recap briefly.

On one hand, using proper versioning improves communication, both within the team and between the team and the customer. It also provides transparency, providing the process and the result at a glance. It also gives you space for automation, providing events you can hook on.

On the other hand, it is simple, adaptable and easy to integrate into any flow.

If there's still a reason why you should not start versioning properly, I don't want to know.

## Slide 27

```javascript
// ./src/execWith.mjs
export const execWith = execFunction => onError => command => {
  try {
    return execFunction(command, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    }).replace(/\n$/, "")
  } catch (e) {
    return onError(e)
  }
}
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
// import "./0_2_Pipe.spec.mjs"
// import "./1_GetLatestVersion.spec.mjs"
// import "./2_MakeNewVersion.spec.mjs"
// import "./3_ExitIfNoVersion.spec.mjs"
// import "./4_GetVersionCommit.spec.mjs"
// import "./5_GetChanges.spec.mjs"
// import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

## Slide 28

```javascript
// ./src/Pipe.mjs
const _fs = Symbol()

const extend = f => obj => ({ ...obj, ...f(obj) })

export const Pipe = (...fs) => ({
  [_fs]: fs,
  concat: o => Pipe(...fs.concat(o[_fs])),
  run: initialContext => fs.reduce((acc, f) => f(acc), initialContext),
})

Pipe.empty = () => Pipe(x => x)

export const ExtendPipe = (...fs) => Pipe(...fs.map(extend))

ExtendPipe.empty = () => ExtendPipe(() => ({}))
```

```javascript
// ./tests/0_2_Pipe.spec.mjs
import { ExtendPipe, Pipe } from "../src/Pipe.mjs"
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
// import "./1_GetLatestVersion.spec.mjs"
// import "./2_MakeNewVersion.spec.mjs"
// import "./3_ExitIfNoVersion.spec.mjs"
// import "./4_GetVersionCommit.spec.mjs"
// import "./5_GetChanges.spec.mjs"
// import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

## Slide 29

```javascript
// ./src/pipes/GetLatestVersion.mjs
import { ExtendPipe } from "../Pipe.mjs"

/**
 * git-describe - Give an object a human readable name based on an
 * available ref.
 * @see https://git-scm.com/docs/git-describe
 *
 * * --tags
 * Instead of using only the annotated tags, use any tag found in
 * refs/tags namespace. This option enables matching a lightweight
 * (non-annotated) tag.
 *
 * * --abbrev=<n>
 * Instead of using the default 7 hexadecimal digits as the abbreviated
 * object name, use <n> digits, or as many digits as needed to form a
 * unique object name. An <n> of 0 will suppress long format, only
 * showing the closest tag.
 *
 * * --match <pattern>
 * Only consider tags matching the given glob(7) pattern, excluding the
 * "refs/tags/" prefix.
 *
 * @warning The glob "*[0-9].*[0-9].*[0-9]" is not the perfect solution
 * as it equally matches "1.0.0" and "1.foo0.bar0". It is used as a
 * quick example here and real-life implementation should not rely on
 * it.
 */
export const GetLatestVersion = exec =>
  ExtendPipe(() => ({
    latestVersion: exec(
      `git describe --match "*[0-9].*[0-9].*[0-9]" --abbrev=0 HEAD --tags`,
    ),
  }))
```

```javascript
// ./src/pipes/Log.mjs
import { ExtendPipe } from "../Pipe.mjs"

export const Log = logger => ExtendPipe(logger)
```

```javascript
// ./src/index.mjs
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
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
// import "./2_MakeNewVersion.spec.mjs"
// import "./3_ExitIfNoVersion.spec.mjs"
// import "./4_GetVersionCommit.spec.mjs"
// import "./5_GetChanges.spec.mjs"
// import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

Commit with :sparkles:.

## Slide 30

```javascript
// ./src/pipes/MakeNewVersion.mjs
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
```

```javascript
// ./src/index.mjs
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
  .run()
  .run({ argv })
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
import "./2_MakeNewVersion.spec.mjs"
// import "./3_ExitIfNoVersion.spec.mjs"
// import "./4_GetVersionCommit.spec.mjs"
// import "./5_GetChanges.spec.mjs"
// import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

Commit with :sparkles:.

## Slide 31

```javascript
// ./src/pipes/ExitIfNoVersion.mjs
import { ExtendPipe } from "../Pipe.mjs"

export const ExitIfNoVersion = onNoNewVersion =>
  ExtendPipe(({ newVersion, latestVersion }) =>
    newVersion == latestVersion ? onNoNewVersion() : {},
  )
```

```javascript
// ./src/index.mjs
import { execSync } from "child_process"
import { execWith } from "./execWith.mjs"
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { MakeNewVersion } from "./pipes/MakeNewVersion.mjs"
import { ExitIfNoVersion } from "./pipes/ExitIfNoVersion.mjs"
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
  .concat(ExitIfNoVersion(() => process.exit(0)))
  .concat(Log(console.log))
  .run({ argv })
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
import "./2_MakeNewVersion.spec.mjs"
import "./3_ExitIfNoVersion.spec.mjs"
// import "./4_GetVersionCommit.spec.mjs"
// import "./5_GetChanges.spec.mjs"
// import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

## Slide 32

```javascript
// ./src/pipes/GetVersionCommit.mjs
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
```

```javascript
// ./src/index.mjs
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
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
import "./2_MakeNewVersion.spec.mjs"
import "./3_ExitIfNoVersion.spec.mjs"
import "./4_GetVersionCommit.spec.mjs"
// import "./5_GetChanges.spec.mjs"
// import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

## Slide 33

```javascript
// ./src/pipes/GetChanges.mjs
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
```

```javascript
// ./src/index.mjs
import { execSync } from "child_process"
import { execWith } from "./execWith.mjs"
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { MakeNewVersion } from "./pipes/MakeNewVersion.mjs"
import { ExitIfNoVersion } from "./pipes/ExitIfNoVersion.mjs"
import { GetVersionCommit } from "./pipes/GetVersionCommit.mjs"
import { GetChanges } from "./pipes/GetChanges.mjs"
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
  .concat(GetChanges(execOrExit))
  .concat(Log(console.log))
  .run({ argv })
  .run({ argv, conventions })
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
import "./2_MakeNewVersion.spec.mjs"
import "./3_ExitIfNoVersion.spec.mjs"
import "./4_GetVersionCommit.spec.mjs"
import "./5_GetChanges.spec.mjs"
// import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

## Slide 34

```javascript
// ./src/pipes/ForceBump.mjs
import { ExtendPipe } from "../Pipe.mjs"
import { testConvention } from "../utils.mjs"

export const ForceBump = ExtendPipe(
  ({ changes, argv, conventions }) => ({
    argv: Object.keys(conventions).reduce(
      (acc, c) =>
        changes.find(testConvention(conventions[c]))
          ? acc.concat([`--${c}`])
          : acc,
      argv,
    ),
  }),
)
```

```javascript
// ./src/index.mjs
import { execSync } from "child_process"
import { execWith } from "./execWith.mjs"
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { MakeNewVersion } from "./pipes/MakeNewVersion.mjs"
import { ExitIfNoVersion } from "./pipes/ExitIfNoVersion.mjs"
import { GetVersionCommit } from "./pipes/GetVersionCommit.mjs"
import { GetChanges } from "./pipes/GetChanges.mjs"
import { ForceBump } from "./pipes/ForceBump.mjs"
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
  .concat(GetChanges(execOrExit))
  .concat(ForceBump)
  .concat(MakeNewVersion)
  .concat(ExitIfNoVersion(() => process.exit(0)))
  .concat(Log(console.log))
  .run({ argv, conventions })
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
import "./2_MakeNewVersion.spec.mjs"
import "./3_ExitIfNoVersion.spec.mjs"
import "./4_GetVersionCommit.spec.mjs"
import "./5_GetChanges.spec.mjs"
import "./6_ForceBump.spec.mjs"
// import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

## Slide 35

```javascript
// ./src/pipes/MakeChangelog.mjs
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
```

```javascript
// ./src/index.mjs
import { execSync } from "child_process"
import { execWith } from "./execWith.mjs"
import { ExtendPipe } from "./Pipe.mjs"
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { MakeNewVersion } from "./pipes/MakeNewVersion.mjs"
import { ExitIfNoVersion } from "./pipes/ExitIfNoVersion.mjs"
import { GetVersionCommit } from "./pipes/GetVersionCommit.mjs"
import { GetChanges } from "./pipes/GetChanges.mjs"
import { ForceBump } from "./pipes/ForceBump.mjs"
import { MakeChangelog } from "./pipes/MakeChangelog.mjs"
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

const MakeChangelogIfRequired = argv.includes("--changelog")
  ? MakeChangelog
  : ExtendPipe.empty()

GetLatestVersion(execOrElse(() => "0.0.0"))
  .concat(GetVersionCommit(execOrExit))
  .concat(GetChanges(execOrExit))
  .concat(ForceBump)
  .concat(MakeNewVersion)
  .concat(ExitIfNoVersion(() => process.exit(0)))
  .concat(MakeChangelog)
  .concat(MakeChangelogIfRequired)
  .concat(Log(console.log))
  .run({ argv, conventions })
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
import "./2_MakeNewVersion.spec.mjs"
import "./3_ExitIfNoVersion.spec.mjs"
import "./4_GetVersionCommit.spec.mjs"
import "./5_GetChanges.spec.mjs"
import "./6_ForceBump.spec.mjs"
import "./7_MakeChangelog.spec.mjs"
// import "./8_Log.spec.mjs"
```

## Slide 36

```javascript
// ./src/pipes/Log.mjs
import { ExtendPipe } from "../Pipe.mjs"

export const Log = logger => ExtendPipe(logger)
export const Log = logger =>
  ExtendPipe(({ newVersion, changelog }) =>
    logger(changelog || newVersion),
  )
```

```javascript
// ./src/index.mjs
import { GetLatestVersion } from "./pipes/GetLatestVersion.mjs"
import { MakeNewVersion } from "./pipes/MakeNewVersion.mjs"
import { ExitIfNoVersion } from "./pipes/ExitIfNoVersion.mjs"
import { GetVersionCommit } from "./pipes/GetVersionCommit.mjs"
import { GetChanges } from "./pipes/GetChanges.mjs"
import { ForceBump } from "./pipes/ForceBump.mjs"
import { MakeChangelog } from "./pipes/MakeChangelog.mjs"
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

const stdOut = str => process.stdout.write(str)

const MakeChangelogIfRequired = argv.includes("--changelog")
  ? MakeChangelog
  : ExtendPipe.empty()
GetLatestVersion(execOrElse(() => "0.0.0"))
  .concat(GetVersionCommit(execOrExit))
  .concat(GetChanges(execOrExit))
  .concat(ForceBump)
  .concat(MakeNewVersion)
  .concat(ExitIfNoVersion(() => process.exit(0)))
  .concat(MakeChangelogIfRequired)
  .concat(Log(console.log))
  .concat(Log(stdOut))
  .run({ argv, conventions })
```

```javascript
// ./tests/index.mjs
import "./clown.spec.mjs"
import "./0_1_execWith.spec.mjs"
import "./0_2_Pipe.spec.mjs"
import "./1_GetLatestVersion.spec.mjs"
import "./2_MakeNewVersion.spec.mjs"
import "./3_ExitIfNoVersion.spec.mjs"
import "./4_GetVersionCommit.spec.mjs"
import "./5_GetChanges.spec.mjs"
import "./6_ForceBump.spec.mjs"
import "./7_MakeChangelog.spec.mjs"
import "./8_Log.spec.mjs"
```

## Slide 37

This is it. The final state of the application is available in this branch.

## Slide 38

QA time.
