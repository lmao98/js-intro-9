const { generateRandomNumber } = require("../utils/MathHelper.js");
// 100 to 0 both inclusive
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

// 0 to 50 all even

for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}

for (let i = 0; i <= 25; i++) {
  console.log(i * 2);
}
//  0 to 50 divisable by 5
for (let i = 0; i <= 50; i++) {
  if (i % 5 === 0) console.log(i);
}

// find sum of numbers from 1 to 5 both inclusive = 15

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// find the from 10 to 15 both inc = 75

let total = 0;

for (let i = 10; i <= 15; i++) {
  total += i;
}
console.log(total);

// output each character of a string

let school = "TechGlobal School";

for (let i = 0; i < school.length; i++) {
  console.log(school[i]);
}
// Count the total occorance of letter o in TechGloabl School

let count = 0;

for (let i = 0; i < school.length; i++) {
  if (school[i] === "o" || school[i] === "O") {
    count++;
  }
}

console.log(count);

// output all odd number from 1 to rand

let randomNumber = generateRandomNumber(10, 20);
console.log("The random number is = ", randomNumber);
for (let i = 1; i <= randomNumber; i += 2) {
  console.log(i);
}
