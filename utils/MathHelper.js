function generateRandomNumber(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function maxOfArray(arr) {
  return Math.max(...arr);
}
function minOfArray(arr) {
  return Math.min(...arr);
}
// Exporting your reusable methods one by one
module.exports.generateRandomNumber = generateRandomNumber;
module.exports.maxOfArray = maxOfArray;
module.exports.minOfArray = minOfArray;

// const { generateRandomNumber } = require("../utils/MathHelper.js");
