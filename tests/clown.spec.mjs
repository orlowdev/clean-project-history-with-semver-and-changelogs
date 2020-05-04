import { AssertionError } from "assert"
import { test, expect, describe, it } from "./clown.mjs"

const mockTest = test(
  x => x,
  (...xs) => xs,
)

const trueCase = () => expect(true).toEqual(true)
const falseCase = () => expect(true).toEqual(false)

describe("clown", () => {
  it("should pass message to onSuccess hook if test passes", () => {
    expect(mockTest("it works", trueCase)).toEqual("it works")
  })

  it("should pass message as the first argument to onError hook if the test fails", () => {
    expect(mockTest("it doesn't work", falseCase)[0]).toEqual(
      "it doesn't work",
    )
  })

  it("should pass AssertionError as the second argument to onError hook if test fails", () => {
    expect(mockTest("it doesn't work", falseCase)[1]).toBeInstanceOf(
      AssertionError,
    )
  })
})
