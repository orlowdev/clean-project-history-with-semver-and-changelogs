# InVersion

InVersion is a tool written in JavaScript that evaluates the changes since the previous version, deduces the next one to be released and, optionally, generates a changelog in Markdown for the new version.

## DocOpt

See [DocOpt](https://docopt.org).

```text
InVersion

InVersion is a tool written in JavaScript that evaluates the changes
since the previous version, deduces the next one to be released and,
optionally, generates a changelog in Markdown for the new version.

Usage:
  node src/index.mjs [--patch] [--minor] [--major] [--changelog]

Options:
  --patch       Force bumping patch version
  --minor       Force bumping minor version
  --major       Force bumping major version
  --changelog   Create changelog instead of the new version
```

## Usage

### Running

```text
node src/index.mjs
```

### Testing

```text
node tests/index.mjs
```

## What to do next

- Add support for `[--debug]` option that instructs the program to output debug information about its execution process on each step. The format and the messages being displayed are designed by you. If you want, you can extract the colouring code from the `./tests/clown.mjs` and apply some styling - just make sure you don't break the tests. For example, it could be something like:

```text
DEBUG: Latest version: 1.0.1
DEBUG: Latest version commit: ab23c4f
DEBUG: Found 2 patch-level changes
DEBUG: Found 1 minor-level change
DEBUG: Version candidate: 1.1.0
DEBUG: Ignoring changelog creation...
1.1.0%
```

- Add `[--help]` option that will output the message from the [DocOpt](#docopt) section and immediately quit with code **0**. Don't forget to add the new options to the help message as you go!
- Update conventions to fully support [GitMoji](https://gitmoji.carloscuesta.me/):
  - major: 💥 (`:boom:`)
  - minor: ✨ (`:sparkles:`)
  - patch: 🐛 (`:bug:`) **OR** 🚑 (`:ambulance:`) **OR** 🔑 (`:lock:`)
- **\*** Only consider fully SemVer-compliant tags when extracting `latestVersion` (current implementation works in incorrect scenarios, e.g. **1.foo0.bar0**)
- **\*** Add `[--pre-release=<s>]` option that will instruct the program to produce a new version and append a hyphen and the provided pre-release to it. If the `--pre-release` value does not end with a number, **1** must be added to resolve possible issues in further releases. If there is the same version and the same pre-release postfix, the pre-release number must be incremented. E.g.:
  - (**--pre-release=alpha**): `1.3.7` -> `2.0.0-alpha.1` -> `2.0.0-alpha.2`
- **\*\*** Add `[--build-metadata=<s>]` option that will produce a new version and append a plus sign and the provided build metadata to it. If the `--build-metadata` value does not end with a number, **1** must be added to resolve possible issues in further releases. If there is the same version and the same build metadata, the build metadata number must be added or incremented. If there is the same version, the same pre-release postfix and the same build metadata, the pre-release number must be incremented. E.g.:
  - (**--build-metadata=20200510**): `1.3.7` -> `1.3.8+20200510.1` -> `1.3.8+20200510.2`
  - (**--pre-release=rc --build-metadata=20200510**): `1.3.7-rc.1` -> `1.3.8-rc.1+20200510.1` -> `1.3.8-rc.2+20200510.1`
