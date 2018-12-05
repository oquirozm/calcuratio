const toFixed = (num, numOfDecimals) => {
  let re = new RegExp("^-?\\d+(?:.\\d{0," + (numOfDecimals || -1) + "})?");
  return parseFloat(num.toString().match(re)[0]);
};

const calculateGCD = (a, b) => {
  return b == 0 ? a : calculateGCD(b, a % b);
};

// this function calculates the aspect ratio in the simplest way. In future versions it should round some aspect ratios to the most used resolutions
// the following link provides a nice function that could be used to give a more usable aspect ratio result
// https://stackoverflow.com/a/13466237/2577494
const calculateAspectRatio = (width, height) => {
  let gcd = calculateGCD(width, height);
  return {
    x: width / gcd,
    y: height / gcd,
  };
};

export default {
  toFixed,
  calculateAspectRatio,
  calculateGCD,
};
