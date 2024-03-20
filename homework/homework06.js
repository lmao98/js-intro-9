// Task 01

const noSpace = (str) => {
  return str.replaceAll(" ", "");
};

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));

// Task 02

console.log("\n_______________________\n");

const replaceFirstLast = (str) => {
  str = str.trim();
  const rest = str.slice(1, -1);
  if (str.length < 2) {
    return "";
  } else {
    return str.at(-1) + rest + str.at(0);
  }
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));

// Task 03

console.log("\n_______________________\n");

// I tried to do it without using if else because includes will always return true or false but it kept giving me wrong answers.
const hasVowel = (str) => {
  const vowel = "aeoui";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      return true;
    }
  }
  return false;
};

console.log(hasVowel(""));
console.log(hasVowel("javaScript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

// Task 04

console.log("\n_______________________\n");

// I could get the current year from new Date.... but in the question it says 2023 so i'll stick to it.
const checkAge = (num) => {
  const currentYear = 2023;
  age = currentYear - num;
  if (age > currentYear || age > 120) return "AGE IS NOT VALID";
  else if (age < 16) return "AGE IS NOT ALLOWED";
  else if (age >= 16) return "AGE IS ALLOWED";
};

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

// Task 05

console.log("\n_______________________\n");

const averageOfEdges = (num1, num2, num3) => {
  let min = Math.min(num1, num2, num3);
  let max = Math.max(num1, num2, num3);
  return (min + max) / 2;
};

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));
console.log(averageOfEdges(-4, 17, 3));

// Task 06

console.log("\n_______________________\n");

// tried with filter but since it doesn't modify the original array, it didn't work.
// const noA = (arr) => {
//   return arr.filter((a) => (a[0].toLowerCase().includes("a") ? "###" : a));
// };

// console.log(noA(["javascript", "hello", "123", "xyz"]));
// console.log(noA(["apple", "123", "ABC", "javascript"]));
// console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

const noA = (arr) => {
  return arr.map((a) => (a[0].toLowerCase().includes("a") ? "###" : a));
};

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

// Task 07

console.log("\n_______________________\n");

/*

*/

const no3and5 = (arr) => {
  let index = 0;
  for (const num of arr) {
    if (num % 3 === 0 && num % 5 === 0) arr[index] = 101;
    else if (num % 5 === 0) arr[index] = 99;
    else if (num % 3 === 0) arr[index] = 100;
    index++;
  }
  return arr;
};

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

/* 
Using map

const no3and5 = (arr) => {
  return arr.map(num => {
    if (num % 3 === 0 && num % 5 === 0) return 101;
    else if (num % 5 === 0) return 99;
    else if (num % 3 === 0) return 100;
    else return num;
  });
};
*/

// Task 08

console.log("\n_______________________\n");

/*
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/

// const countPrimes = (arr) => {
//   arr.map(num => {

//   })
// }

// const isPrime = (num) => {
//   if (num <= 1) return false;
//   if (num <= 3) return true;

//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }

//   return true;
// };

// const countPrimes = (arr) => {
//   return arr.reduce((count, num) => {
//     if (num > 1 && isPrime(num)) {
//       count++;
//     }
//     return count;
//   }, 0);
// };

// console.log(countPrimes([-10, -3, 0, 1]));
// console.log(countPrimes([7, 4, 11, 23, 17]));
// console.log(countPrimes([41, 53, 19, 47, 67]));

const isPrime = (num) => {
  if (num < 2) return `${num} is not a prime number`;
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) return `${num} is not a prime number`;
  }
  return `${num} is a prime number`;
};
