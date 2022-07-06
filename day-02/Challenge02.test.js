"use strict";

const {
  reverseArray,
  shuffleArray,
  shuffleString,
} = require("./../code-challenges/challenges-02");

describe("Challenge01", () => {
  test.skip("reverse_Array", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
    expect(reverseArray(["C#", "JS", "Ruby", "Python"])).toStrictEqual([
      "Python",
      "Ruby",
      "JS",
      "C#",
    ]);
    expect(reverseArray(["88", 10, "course", 71])).toStrictEqual([
      71,
      "course",
      10,
      "88",
    ]);
  });

  test("shuffle_Array", () => {
    expect(shuffleArray([2, 5, 1, 3, 4, 7])).toStrictEqual([2, 3, 5, 4, 1, 7]);
    expect(shuffleArray([1, 2, 3, 4, 4, 3, 2, 1])).toStrictEqual([
      1, 4, 2, 3, 3, 2, 4, 1,
    ]);
    expect(shuffleArray([1, 1, 2, 2])).toStrictEqual([1, 2, 1, 2]);
  });

  test("shuffle_String", () => {
    expect(shuffleString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])).toStrictEqual(
      "leetcode"
    );
    expect(shuffleString("abc"), [0, 1, 2]).toStrictEqual("abc");
    expect(
      shuffleString("worldhello", [5, 4, 7, 3, 9, 0, 1, 8, 2, 6])
    ).toStrictEqual("helloworld");
  });
});
