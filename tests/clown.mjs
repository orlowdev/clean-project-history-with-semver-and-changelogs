import assert from "assert"

const AsciiSymbols = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  magenta: "\x1b[35m",
  blue: "\x1b[34m",
}

const applyColor = color => message =>
  process.argv.includes("--color")
    ? AsciiSymbols[color].concat(message).concat(AsciiSymbols.reset)
    : message

const red = applyColor("red")
const green = applyColor("green")
const magenta = applyColor("magenta")
const blue = applyColor("blue")
const bold = applyColor("bold")

export const expect = x => ({
  toEqual: pred => assert.deepStrictEqual(x, pred),
  toBeInstanceOf: ctor => assert.ok(x instanceof ctor),
})

export const test = (onSuccess, onError) => (message, callback) => {
  try {
    callback()
    return onSuccess(message)
  } catch (error) {
    return onError(message, error)
  }
}

const onSuccess = message =>
  console.log(`  ${green("✔︎")} it ${message}`)

const onError = (message, error) => {
  console.log(`  ${red("✗")} it ${message}`)
  console.error(error)
  process.exit(1)
}

export const describe = (message, callback) => {
  console.log(blue(bold(message)))
  callback()
}

export const it = test(onSuccess, onError)

it.todo = (message, _) => console.log(`  ${magenta("✎")} it ${message}`)
