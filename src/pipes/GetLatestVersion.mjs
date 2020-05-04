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
