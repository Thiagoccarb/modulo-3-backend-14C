type AnyArray = any[];

type callbackFilter<T> = (value: T, index?: number, array?: T[]) => boolean;

function filter<T>(array: T[], callback: callbackFilter<T>): T[] {
    const newArray: T[] = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(filter([1, 2, 3], (item) => {
    return item < 3
}));

console.log(filter(["a", "b", "c"], (item) => {
    return item !== "a"
}));