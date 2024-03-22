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

// Task 06

console.log("\n_______________________\n");

const sumOfDigits = (str) => {
  str = str.trim();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      sum += Number(str[i]);
    }
  }
  return sum;
};

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("Johns age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

// Task 07

console.log("\n_______________________\n");

const factorial = (num) => {
  let result = 1;
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const arrFactorial = (arr) => {
  if (arr === undefined) return [];
  return arr.map((number) => factorial(number));
};

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial());

// Task 08

console.log("\n_______________________\n");

// Using Ascii
const categorizeCharacters = (str) => {
  str = str.trim();
  let characters = "";
  let digits = "";
  let specialCharacters = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (!isNaN(Number(str[i]))) digits += str[i];
    else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) characters += str[i];
    else specialCharacters += str[i];
  }

  return [characters, digits, specialCharacters];
};

console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));
console.log(categorizeCharacters(""));

/*
Using Unicode

const categorizeCharacters = (str) => {
  str = str.trim();
  let characters = "";
  let digits = "";
  let specialCharacters = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!isNaN(Number(str[i]))) digits += str[i];
    else if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))  characters += str[i];
    else specialCharacters += str[i];
  }

  return [characters, digits, specialCharacters];
};

*/
