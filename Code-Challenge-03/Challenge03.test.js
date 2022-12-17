"use strict";

const {
  cvFormatter,
  targetArrayInGivenOrder,
  arrInc,
} = require("./../code-challenges/challenges-03");

describe("Challenge03", () => {
  test("CV-Formatter", () => {
    let first_Cv_Sample = [
      {
        firstName: "Jason",
        lastName: "James",
        yearsOfExperience: 20,
        tech: "JS",
      },
      {
        firstName: "Aaron",
        lastName: "William",
        yearsOfExperience: 2,
        tech: "JS",
      },
      {
        firstName: "Shira",
        lastName: null,
        yearsOfExperience: 5,
        tech: ".Net",
      },
      {
        firstName: "Dimitri",
        lastName: "Akkerman",
        yearsOfExperience: 1,
        tech: "Python",
      },
      {
        firstName: "Isabella",
        lastName: null,
        yearsOfExperience: 7,
        tech: "Java",
      },
    ];

    let second_Cv_Sample = [
      {
        firstName: "Adele",
        lastName: "Douglas",
        yearsOfExperience: 7,
        tech: ".Net",
      },
      {
        firstName: "Jack",
        lastName: "Tyler",
        yearsOfExperience: 17,
        tech: "Java",
      },
      {
        firstName: null,
        lastName: "Henry",
        yearsOfExperience: 0,
        tech: "JS",
      },
      {
        firstName: "Jose",
        lastName: "Adam",
        yearsOfExperience: 5,
        tech: ".Net",
      },
      {
        firstName: "Victoria",
        lastName: "Zachary",
        yearsOfExperience: 10,
        tech: "Python",
      },
    ];

    let received = [
      {
        fullName: "Jason James",
        tech: "JS",
      },
      {
        fullName: "Aaron William",
        tech: "JS",
      },
      {
        fullName: "Shira",
        tech: ".Net",
      },
      {
        fullName: "Isabella",
        tech: "Java",
      },
    ];

    let received2 = [
      {
        fullName: "Adele Douglas",
        tech: ".Net",
      },
      {
        fullName: "Jack Tyler",
        tech: "Java",
      },
      {
        fullName: "Jose Adam",
        tech: ".Net",
      },
      {
        fullName: "Victoria Zachary",
        tech: "Python",
      },
    ];
    expect(cvFormatter(first_Cv_Sample)).toStrictEqual(received);
    expect(cvFormatter(second_Cv_Sample)).toStrictEqual(received2);
  });
});

describe("Challenge03", () => {
  test("targetArrayInGivenOrder", () => {
    expect(
      targetArrayInGivenOrder([0, 1, 2, 3, 4], [0, 4, 1, 2, 3])
    ).toStrictEqual([0, 4, 1, 2, 3]);
    expect(
      targetArrayInGivenOrder([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])
    ).toStrictEqual([1, 2, 3, 4, 1]);
  });
});

describe("Challenge03", () => {
  test("Array-Increment", () => {
    expect(arrInc([5, 15, 3, 10, 32])).toStrictEqual([15, 25, 13, 20, 42]);
    expect(arrInc([6, 0, -10, 33])).toStrictEqual([16, 10, 0, 43]);
  });
});

