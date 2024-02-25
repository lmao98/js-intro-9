function generateRandomNumber(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.generateRandomNumber = generateRandomNumber;

// const { generateRandomNumber } = require("../utils/math-helper.js");
