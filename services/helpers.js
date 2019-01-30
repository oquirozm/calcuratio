/*
|--------------------------------------------------------------------------
| Main calculation modules
|--------------------------------------------------------------------------
*/

const calculateGCD = (a, b) => {
  return b == 0 ? a : calculateGCD(b, a % b);
};

const calculateWidth = values => {
  let { xRatio, yRatio, height } = values;
  let width = Math.round((xRatio * height) / yRatio);
  return width;
};

const calculateHeight = values => {
  let { xRatio, yRatio, width } = values;
  let height = Math.round((yRatio * width) / xRatio);
  return height;
};

const calculateAspectRatio = (width, height) => {
  let gcd = calculateGCD(width, height);
  return {
    x: width / gcd,
    y: height / gcd,
  };
};

export { calculateWidth, calculateHeight, calculateAspectRatio };
