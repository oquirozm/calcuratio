import helpers from "../services/helpers";
const { toFixed, calculateAspectRatio } = helpers;

test("toFixed should be a number", () => {
  expect(typeof toFixed(33.1242, 2)).toBe("number");
});

test("toFixed should be a float", () => {
  expect(typeof toFixed(33.1242, 2)).toBe("number");
  expect(Number.isInteger(toFixed(33.1242, 2))).toBeFalsy();
});

test("calculateAspectRatio should return an object with x and y values", () => {
  expect(calculateAspectRatio(1366, 768)).toEqual(
    expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number),
    })
  );
});
// for this we need to approximate values to the most used resolutions. See how here: https://stackoverflow.com/a/13466237/2577494
test("calculateAspectRatio should return 16:9 aspect ratio when given 1366 and 768 as inputs", () => {
  expect(calculateAspectRatio(1366, 768)).toEqual(
    expect.objectContaining({
      x: 16,
      y: 9,
    })
  );
});
