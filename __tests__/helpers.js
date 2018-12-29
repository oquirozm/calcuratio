import { calculateAspectRatio } from '../services/helpers';

test('calculateAspectRatio should return an object with x and y values', () => {
  expect(calculateAspectRatio(1366, 768)).toEqual(
    expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number),
    })
  );
});
// Test currently failed. In next versions I will round aspect ratios to the most used resolutions. I'll use this as a reference: https://stackoverflow.com/a/13466237/2577494
test('calculateAspectRatio should return 16:9 aspect ratio when given 1366 and 768 as inputs', () => {
  expect(calculateAspectRatio(1366, 768)).toEqual(
    expect.objectContaining({
      x: 16,
      y: 9,
    })
  );
});
