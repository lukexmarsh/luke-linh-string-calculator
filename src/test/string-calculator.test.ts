import { stringCalcualtor } from "../main/string-calcualtor";

describe("string calculator", () => {
  it("returns 0 when receiving an empty string", () => {
    expect(stringCalcualtor("")).toEqual(0);
  });
});
