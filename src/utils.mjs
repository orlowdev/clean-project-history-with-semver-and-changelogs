export const testConvention = convention => change =>
  new RegExp(convention).test(change)
