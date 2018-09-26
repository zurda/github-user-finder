import { getStarCount } from "../src/api";

describe("getStarCount function tests", function() {
  it("Returns correct value", function() {
    const repos = [
      {
        stargazers_count: 5
      }
    ];
    const result = getStarCount(repos);
    expect(result).toEqual(5);
  });

  it("If repos is not an array 0 is returned", function() {
    const repos = {
      stargazers_count: 5
    };
    const result = getStarCount(repos);
    expect(result).toEqual(0);
  });
  it("If repos is as empty array 0 is returned", function() {
    const repos = [];
    const result = getStarCount(repos);
    expect(result).toEqual(0);
  });
});
