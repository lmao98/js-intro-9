const names = ["John", "Jane", "Alex", "Max"];

names.forEach((name) => console.log(name.toUpperCase()));
//
names.forEach((name) => console.log(name[0]));
//

names.forEach((name) => {
  if (name.includes("J")) console.log(name);
});
let count = 0;
names.forEach((name) => {
  if (name.length === 4) {
    count++;
  }
});

console.log(count);

const numbers = [5, 10, 3, 0, -2];
// Print each number

numbers.forEach((num) => console.log(num));
// Print True for even numbers and False for Odd
numbers.forEach((num) => {
  if (num % 2 === 0) console.log(true);
  else console.log(false);
});

numbers.forEach((num) => console.log(num % 2 === 0));

const numbers2 = [];

numbers.forEach((num) => numbers2.push(num * 3));

console.log(numbers2);

const numbers3 = [];

numbers.forEach((num) => {
  if (num % 2 === 0) numbers3.push(num);
});

console.log(numbers3);
