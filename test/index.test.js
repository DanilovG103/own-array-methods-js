import { expect } from "chai"
import { numArr, strArr } from "../utils/index.js"
import { filter, map, every, find } from "../src/index.js"

const expectArrayValues = (value, expectedValue) => {
  return expect(value).to.be.deep.equal(expectedValue)
}

describe("Filter function", () => {
  it("Own filter function must return error if array prop is null", () => {
    expect(() => filter(null, item => item > 0)).to.throw(Error)
  })

  it("Own filter function must return error if array prop is undefined", () => {
    expect(() => filter(undefined, item => item > 0)).to.throw(Error)
  })

  it("Own filter function should return correct values with item for array proto filter method", () => {
    const result = filter(numArr, (item) => item > 20)
    const expectedResult = numArr.filter(item => item > 20)

    expectArrayValues(result, expectedResult)
  })

  it("Own filter function should return correct values with index for array proto filter method", () => {
    const result = filter(numArr, (_, index) => index > 5)
    const expectedResult = numArr.filter((_, index) => index > 5)

    expectArrayValues(result, expectedResult)
  })

  it("Own filter function should return correct values with item & index for array proto filter method", () => {
    const result = filter(numArr, (item, index) => item > 25 && index > 19)
    const expectedResult = numArr.filter((item, index) => item > 25 && index > 19)

    expectArrayValues(result, expectedResult)
  })
})

describe("Map function", () => {
  it("Own map function must return error if array prop is null", () => {
    expect(() => map(null, item => item > 0)).to.throw(Error)
  })

  it("Own map function must return error if array prop is undefined", () => {
    expect(() => map(undefined, item => item > 0)).to.throw(Error)
  })

  it("Own map function should return correct values with item for array proto map method", () => {
    const result = map(numArr, item => item * 2)
    const expectedResult = numArr.map(item => item * 2)

    expectArrayValues(result, expectedResult)
  })

  it("Own map function should return correct values with index for array proto map method", () => {
    const result = map(numArr, (_, index) => numArr[index] * 2)
    const expectedResult = numArr.map((_, index) => numArr[index] * 2)

    expectArrayValues(result, expectedResult)
  })

  it("Own map function should return correct values with item & index for array proto map method", () => {
    const result = map(numArr, (item, index) => {
      if (index % 2 === 0) {
        return item ** 2
      }
    })
    const expectedResult = numArr.map((item, index) => {
      if (index % 2 === 0) {
        return item ** 2
      }
    })

    expectArrayValues(result, expectedResult)
  })
})

describe("Every function", () => {
  it("Own every function must return error if array prop is null", () => {
    expect(() => every(null, item => item > 0)).to.throw(Error)
  })

  it("Own every function must return error if array prop is undefined", () => {
    expect(() => every(undefined, item => item > 0)).to.throw(Error)
  })

  it("Own every function must return \"true\" if array is empty", () => {
    expect(every([], item => item > 0)).to.be.true
  })

  it("Own every function should return correct value with item for array proto every method", () => {
    const result = every(numArr, item => item >= 20)
    const expectedResult = numArr.every(item => item >= 20)

    expect(result).to.be.eq(expectedResult)
  })

  it("Own every function should return correct value with index for array proto every method", () => {
    const result = every(numArr, (_, index) => numArr[index] >= 20)
    const expectedResult = numArr.every((_, index) => numArr[index] >= 20)

    expect(result).to.be.eq(expectedResult)
  })
})

describe("Find function", () => {
  it("Own find function must return error if array prop is null", () => {
    expect(() => find(null, item => item > 0)).to.throw(Error)
  })

  it("Own find function must return error if array prop is undefined", () => {
    expect(() => find(undefined, item => item > 0)).to.throw(Error)
  })

  it("Own find function must return \"undefined\" if array is empty", () => {
    expect(find([], item => item > 0)).to.be.undefined
  })

  it("Own find function should return \"undefined\" if there are no values satisfying the condition", () => {
    const result = find(numArr, (item) => item < 1e-10)
    expect(result).to.be.undefined
  })

  it("Own find function should return correct value with item for array proto find method", () => {
    const result = find(numArr, (item) => item > 20)
    const expectedResult = numArr.find((item) => item > 20)

    expect(result).to.be.eq(expectedResult)
  })

  it("Own find function should return correct value with item & index for array proto find method", () => {
    const result = find(numArr, (item, index) => index >= 15 && item > 28)
    const expectedResult = numArr.find((item, index) => index >= 15 && item > 28)

    expect(result).to.be.eq(expectedResult)
  })
})
