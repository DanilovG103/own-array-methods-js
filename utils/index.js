const numberExample = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));

const numArr = numberExample(40,40)
const strArr = []

export { numArr, strArr }