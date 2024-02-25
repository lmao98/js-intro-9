// Task - 1

let randomNumber = Math.floor(Math.random() * 51);
let result = randomNumber * 5;
console.log(`The random number * 5 = ${result}`);

// Task - 2

let randomNumber1 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber1);
let randomNumber2 = Math.floor(Math.random() * 10) + 1;
let minNumber = Math.min(randomNumber1, randomNumber2);
let maxNumber = Math.max(randomNumber1, randomNumber2);
let difference = Math.abs(randomNumber1 - randomNumber2);

console.log(`Min number = ${minNumber}`);
console.log(`Max number = ${maxNumber}`);
console.log(`Difference = ${difference}`);

// Task - 3

let randomNumber3 = Math.floor(Math.random() * 51 + 50);
let result2 = randomNumber3 % 10;
console.log(`The random number % 10 = ${result2}`);
console.log(randomNumber3);

// Task - 4

let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;
let number3 = Math.floor(Math.random() * 10) + 1;
let number4 = Math.floor(Math.random() * 10) + 1;
let number5 = Math.floor(Math.random() * 10) + 1;

let points = number1 * 5 + number2 * 4 + number3 * 3 + number4 * 2 + number5 * 1;
console.log(points);

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);

// Task - 5

let ranNum1 = Math.floor(Math.random() * (25 - 1 + 1) + 1);
let ranNum2 = Math.floor(Math.random() * (50 - 26 + 1) + 26);
let ranNum3 = Math.floor(Math.random() * (75 - 51 + 1) + 51);
let ranNum4 = Math.floor(Math.random() * (100 - 76 + 1) + 76);

let ranMaxNum = Math.max(ranNum1, ranNum2, ranNum3, ranNum4);
let ranMinxNum = Math.min(ranNum1, ranNum2, ranNum3, ranNum4);

console.log(`Difference of max and min =${Math.abs(ranMaxNum - ranMinxNum)}`);

console.log(`Difference of second and third =${Math.abs(ranNum2 - ranNum3)}`);

console.log(`Average of all = ${(ranNum1 + ranNum2 + ranNum3 + ranNum4) / 4}`);
