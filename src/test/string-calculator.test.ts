import { Add } from "../main/string-calculator";

describe("string calculator", () => {
  it("returns 0 when receiving an empty string", () => {
    expect(Add("")).toEqual(0);
  });
});
