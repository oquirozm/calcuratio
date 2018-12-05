import helpers from "../services/helpers";
const { toFixed } = helpers;

test("should return a number", () => {
  expect(typeof toFixed(33.1242, 2)).toBe("number");
});
