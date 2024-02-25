const { generateRandomNumber } = require("../utils/math-helper.js");

let r1 = generateRandomNumber(1, 12);

if (r1 === 12 || r1 === 1 || r1 === 2) {
  console.log(`Winter`);
} else if (r1 === 3 || r1 === 4 || r1 === 5) {
  console.log(`Spring`);
} else if (r1 === 6 || r1 === 7 || r1 === 8) {
  console.log(`Summer`);
} else {
  console.log(`Fall`);
}
