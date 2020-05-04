import { ExtendPipe } from "../Pipe.mjs"

export const Log = logger =>
  ExtendPipe(({ newVersion, changelog }) =>
    logger(changelog || newVersion),
  )
