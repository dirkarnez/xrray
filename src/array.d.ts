interface Array<T> {
    singleOrThrow<T>(callbackfn: (value: T, index: number, array: T[]) => T | null): T | null;
}