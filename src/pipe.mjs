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
