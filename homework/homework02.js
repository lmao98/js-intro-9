// Task - 1
let str1 = "5";
let str2 = "2";

console.log(`The sum of 5 and 2 is = ${Number(str1) + Number(str2)}`);
console.log(`The product of 5 and 2 is = ${Number(str1) * Number(str2)}`);
console.log(`The divison of 5 and 2 is = ${Number(str1) / Number(str2)}`);
console.log(`The subtraction of 5 and 2 is = ${Number(str1) - Number(str2)}`);
console.log(`The remainder of 5 and 2 = ${Number(str1) % Number(str2)}`);
console.log(`The exponentiation of 5 and 2 is = ${Number(str1 ** str2)}`);

// Task - 2
let s1 = "200";
let s2 = "-50";

console.log(`The greatest value is = ${Number(Math.max(s1, s2))}`);
console.log(`The smallest value is = ${Number(Math.min(s1, s2))}`);
console.log(`The average is = ${(Number(s1) + Number(s2)) / 2}`);
console.log(`The absolute difference is = ${Number(Math.abs(s1 - s2))}`);

// Task - 3

let ran1 = Math.floor(Math.random() * 50 + 1);
let ran2 = Math.floor(Math.random() * 50 + 1);

console.log(`The absolute diffrenece between the numbers is = ${Math.abs(ran1 - ran2)}`);

// Task - 4

let rand1 = Math.floor(Math.random() * 50 + 1);
let rand2 = Math.floor(Math.random() * 50 + 1);
let rand3 = Math.floor(Math.random() * 50 + 1);
let rand4 = Math.floor(Math.random() * 50 + 1);
let rand5 = Math.floor(Math.random() * 50 + 1);

console.log(`The max value = ${Math.max(rand1, rand2, rand3, rand4, rand5)}`);
console.log(`The min value = ${Math.min(rand1, rand2, rand3, rand4, rand5)}`);

// Task - 5

let randNum1 = Math.floor(Math.random() * 51 + 1);
let randNum2 = Math.floor(Math.random() * 51 + 1);
let randNum3 = Math.floor(Math.random() * 51 + 1);

console.log(`The number 1 = ${randNum1}`);
console.log(`The number 2 = ${randNum2}`);
console.log(`The number 3 = ${randNum3}`);
console.log(`The sum of the numbers is = ${randNum1 + randNum2 + randNum3}`);

// Task - 6

let randomNum1 = Math.floor(Math.random() * 100 + 1);
let randomNum2 = Math.floor(Math.random() * 100 + 1);
let randomNum3 = Math.floor(Math.random() * 100 + 1);

console.log(randomNum1 > 25 && randomNum2 > 25 && randomNum3 > 25);

// Task - 7

let name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 character in the name are = ${name[0]}${name[1]}${name[2]}`);
console.log(`The lasr 3 character in the name are = ${name.at(-3)}${name.at(-2)}${name.at(-1)}`);
