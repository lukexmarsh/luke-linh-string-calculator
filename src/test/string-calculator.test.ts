import { Add } from "../main/string-calculator";

describe("string calculator", () => {
  it("returns 0 when receiving an empty string", () => {
    expect(Add("")).toEqual(0);
  });
  it("returns the sum of 2 numbers received", () => {
    expect(Add("3,5")).toEqual(8);
  });
});
