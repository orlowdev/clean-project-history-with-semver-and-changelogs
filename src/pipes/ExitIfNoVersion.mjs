import { ExtendPipe } from "../Pipe.mjs"

export const ExitIfNoVersion = onNoNewVersion =>
  ExtendPipe(({ newVersion, latestVersion }) =>
    newVersion == latestVersion ? onNoNewVersion() : {},
  )
