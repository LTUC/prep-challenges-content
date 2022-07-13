"use strict";

const {
  runningSumOfArray,
  removeElementFromArray,
  oddFiltration,
} = require("./../code-challenges/challenges-04");

describe("Challenge04", () => {
  test("runningSumOfArray", () => {
    expect(runningSumOfArray([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
    expect(runningSumOfArray([1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});

describe("Challenge04", () => {
  test("removeElementFromArray", () => {
    expect(removeElementFromArray([3, 2, 2, 3], 3)).toStrictEqual([2, 2, "_", "_"]);
    expect(removeElementFromArray([0, 1, 2, 2, 3, 0, 4, 2], 2)).toStrictEqual([
      0,
      1,
      3,
      0,
      4,
      "_",
      "_",
      "_",
    ]);
  });
});

describe("Challenge04", () => {
  test("Get_odd_numbers", () => {
    let list1 = [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200];
    let list2 = [25, 47, 8, 95, 2, 3, 55, 41];
    let list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let res1 = [89, 41, 31, 111, 15, 31];
    let res2 = [25, 47, 95, 3, 55, 41];
    let res3 = [1, 3, 5, 7, 9];

    expect(oddFiltration(list1)).toStrictEqual(res1);
    expect(oddFiltration(list2)).toStrictEqual(res2);
    expect(oddFiltration(list3)).toStrictEqual(res3);
  });
});
