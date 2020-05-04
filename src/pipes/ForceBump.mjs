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
