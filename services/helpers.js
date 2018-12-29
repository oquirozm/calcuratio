/*
|--------------------------------------------------------------------------
| Main calculation modules
|--------------------------------------------------------------------------
*/

const calculateGCD = (a, b) => {
  return b == 0 ? a : calculateGCD(b, a % b);
};

// this function calculates the aspect ratio in the simplest way. In future versions it should round some aspect ratios to the most used resolutions. See the following link for reference: https://stackoverflow.com/a/13466237/2577494
const calculateAspectRatio = (width, height) => {
  let gcd = calculateGCD(width, height);
  return {
    x: width / gcd,
    y: height / gcd,
  };
};

export { calculateAspectRatio, calculateGCD };
