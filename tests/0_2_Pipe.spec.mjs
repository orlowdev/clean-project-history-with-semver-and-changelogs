import { ExtendPipe, Pipe } from "../src/pipe.mjs"
import { describe, expect, it } from "./clown.mjs"

describe("Pipe", () => {
  it("should hold associativity", () => {
    const P1 = Pipe(x => x + 1)
    const P2 = Pipe(x => x + 2)
    const P3 = Pipe(x => x + 3)
    expect(P1.concat(P2.concat(P3)).run(1)).toEqual(
      P1.concat(P2).concat(P3).run(1),
    )
  })

  it("should hold left identity", () => {
    const P = Pipe(x => x + 1)
    expect(Pipe.empty().concat(P).run(1)).toEqual(P.run(1))
  })

  it("should hold right identity", () => {
    const P = Pipe(x => x + 1)
    expect(P.concat(Pipe.empty()).run(1)).toEqual(P.run(1))
  })
})

describe("ExtendPipe", () => {
  it("should preserve previous context", () => {
    expect(ExtendPipe(() => ({})).run({ x: 1 })).toEqual({ x: 1 })
  })

  it("should extend previous context with the computation result", () => {
    expect(
      ExtendPipe(({ x }) => ({ y: x + 1 })).run({ x: Infinity }),
    ).toEqual({ x: Infinity, y: Infinity })
  })
})
