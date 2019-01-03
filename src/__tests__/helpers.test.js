import { addCommas } from "../helpers";

describe("addCommas function tests", function() {
  it("Returns correct value", function() {
    const int = 394572093875092;
    const actual = addCommas(int);
    const expected = "394,572,093,875,092";
    expect(actual).toEqual(expected);
  });

  it("If int is not a Number return string '0'", function() {
    const int = "string";
    const actual = addCommas(int);
    const expected = "0";
    expect(actual).toEqual(expected);
  });

  it("If int is not null return string '0'", function() {
    const int = null;
    const actual = addCommas(int);
    const expected = "0";
    expect(actual).toEqual(expected);
  });
});
