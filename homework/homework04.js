const { generateRandomNumber } = require("../utils/MathHelper.js");
// Task - 01
console.log("\n_______________________\n");

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) console.log(i);
}

// Task - 02
console.log("\n_______________________\n");

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 || i % 3 === 0) console.log(i);
}

// Task - 03
console.log("\n_______________________\n");

for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) console.log(i);
}

// Task - 04
console.log("\n_______________________\n");

for (let i = 0; i <= 7; i++) {
  console.log(`The Square of ${i} is = ${i ** 2}`);
}

// Task -05
console.log("\n_______________________\n");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Task - 06
console.log("\n_______________________\n");

let randomNumber = generateRandomNumber(1, 10);

console.log("Random number is", randomNumber);

// Function to calculate factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// Calculate factorial of the random number
let result = factorial(randomNumber);
console.log("Factorial:", result);
