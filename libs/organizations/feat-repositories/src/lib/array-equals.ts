export const arrayEquals = <TValue>(
  xs: readonly TValue[],
  ys: readonly TValue[]
): boolean =>
  xs.length === ys.length && !xs.some((x, index) => x !== ys[index]);
