export default {
  toFixed: (num, numOfDecimals) => {
    let re = new RegExp("^-?\\d+(?:.\\d{0," + (numOfDecimals || -1) + "})?");
    return parseFloat(num.toString().match(re)[0]);
  },
};
