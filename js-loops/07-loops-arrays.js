const names = ["John", "Jane", "Alex", "Max", "james"];
let lowerNames = names.toString().toLowerCase();

// to get all the names with a loop

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// looping array using for of loop

for (const name of names) {
  console.log(name);
}
// count how many names starts with j or J -> 3

let countJ1 = 0;
for (const name of names) {
  if (names.toLowerCase().startsWith("j")) countJ1++;
}

console.log("The total count of names starting with j is = ", countJ1);

// count positive numbers from an array

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countP = 0;

for (const num of numbers) {
  if (num > 0) countP++;
}

console.log(countP);

// count negative or nutral numbers from an array
let countN = 0;

for (const num of numbers) {
  if (num <= 0) countN++;
}

console.log(countN);

// count negative or nutral numbers from an array
let countE = 0;

for (const num of numbers) {
  if (num % 2 === 0) countE++;
}

console.log(countE);

let countEP = 0;

for (const num of numbers) {
  if (num >= 0 && num % 2 === 0) countEP++;
}

console.log(countEP);
