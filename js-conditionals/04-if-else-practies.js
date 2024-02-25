const { generateRandomNumber } = require("../utils/math-helper.js");

let r1 = generateRandomNumber(1, 10);
if (r1 % 2 === 0) {
  console.log(`The number is EVEN`);
} else {
  console.log(`The number is ODD`);
}

console.log(`---------------------`);

let r2 = generateRandomNumber(0, 1);
if (r2 === 0) {
  console.log(`The number is ZERO`);
} else {
  console.log(`The number is ONE`);
}

console.log(`---------------------`);

let r3 = generateRandomNumber(-10, 10);

if (r3 > 0) {
  console.log(`The number is POSITIVE`);
} else if (r3 < 0) {
  console.log(`The number is NEGATIVE`);
} else {
  console.log(`The number is ZERO`);
}
