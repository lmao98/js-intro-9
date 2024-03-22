// Task 01

const hasUpperCase = (str) => {
  return str.split("").some((letter) => letter !== letter.toLowerCase());
};

// Using i loop
// const hasUpperCase = (str) => {
//   str = str.trim();

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i].toLowerCase()) return true;
//     return false;
//   }
// };

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

// Task 02

console.log("\n_______________________\n");

const noDigit = (str) => {
  return str
    .split("")
    .filter((char) => isNaN(Number(char)))
    .join("");
};

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

// Task 03

console.log("\n_______________________\n");

/*

*/

const noVowel = (str) => {
  const vowels = "aeoui";
  str = str.trim();
  return str
    .split("")
    .filter((char) => !vowels.includes(char.toLowerCase()))
    .join("");
};

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

// Task 04

console.log("\n_______________________\n");

/*

*/

const no13 = (arr) => {
  return arr.map((number) => (number === 13 ? 0 : number));
};

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13]));
console.log(no13([]));

// Task 05

console.log("\n_______________________\n");

/*
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/
/*
without sorting

const middleInt = (num1, num2, num3) => {
  const max = Math.max(num1, num2, num3);
  const min = Math.min(num1, num2, num3);

  if (num1 !== min && num1 !== max) return num1;
  else if (num2 !== min && num2 !== max) return num2;
  return num3;
};

*/

const middleInt = (num1, num2, num3) => {
  const nums = [num1, num2, num3];
  nums.sort((a, b) => a - b);
  return nums[1];
};

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));
