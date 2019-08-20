Array.prototype.singleOrThrow = function<T>(callbackfn: (value: T, index: number, array: T[]) => T | null) {
    const filtered = this.filter(callbackfn);
    if (!filtered || filtered.length != 1) {
        throw new Error("No single element");
    } else {
        return filtered[0];
    }
};