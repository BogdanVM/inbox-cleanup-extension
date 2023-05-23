export function callbackToPromise<T, N extends PropertyKey>(
  functionWithCallback: (callback: (...args: T[]) => unknown) => void,
  argsNames: N[]
): Promise<Record<N, T>> {
  return new Promise((resolve, reject) => {
    try {
      functionWithCallback((...args) =>
        resolve(
          args.reduce(
            (acc, arg, index) => ({ ...acc, [argsNames[index]]: arg }),
            {} as Record<N, T>
          )
        )
      );
    } catch (error) {
      reject(error);
    }
  });
}
