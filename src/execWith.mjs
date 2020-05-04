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
