import { getStarCount } from "../api";

describe("getStarCount function tests", function() {
  it("Returns correct value", function() {
    const repos = [
      {
        stargazers_count: 5
      }
    ];
    const actual = getStarCount(repos);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  // it("If repos is not an array 0 is returned", function() {
  //   const repos = {
  //     stargazers_count: 5
  //   };
  //   const actual = getStarCount(repos);
  //   const expected = 0;
  //   expect(actual).toEqual(expected);
  // });
  // it("If repos is as empty array 0 is returned", function() {
  //   const repos = [];
  //   const actual = getStarCount(repos);
  //   const expected = 0;
  //   expect(actual).toEqual(expected);
  // });
});
