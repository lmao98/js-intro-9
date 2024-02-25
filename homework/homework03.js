const { generateRandomNumber } = require("../utils/MathHelper.js");

// Task - 1

let num1 = generateRandomNumber(1, 100);
let num2 = generateRandomNumber(1, 100);
let num3 = generateRandomNumber(1, 100);

if ((num1 + num2 + num3) / 3 >= 50) console.log(true);
else console.log(false);

// Task - 2
console.log("\n_______________________\n");

let numb1 = generateRandomNumber(1, 3);
let numb2 = generateRandomNumber(1, 3);
let numb3 = generateRandomNumber(1, 3);

if (numb1 !== numb2 && numb1 !== numb3 && numb2 !== numb3) console.log("NO MATCH");
else if (numb1 === numb2 || numb1 === numb3 || numb2 === numb3) console.log("DOUBLE MATCH");
else console.log("TRIPLE MATCH");

// Task - 3
console.log("\n_______________________\n");

function hasA(string) {
  if (string.toUpperCase().includes("A")) return true;
  else return false;
}
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));
console.log(hasA("Abe"));

// Task - 4
console.log("\n_______________________\n");

function doubleOrTripleWord(string) {
  if (string.length % 2 === 0) return string.repeat(3);
  else return string.repeat(2);
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

// Task - 5
console.log("\n_______________________\n");

function firstWord(string) {
  return string.split(" ")[0];
}
console.log(firstWord("Abdullah Albayati"));
console.log(firstWord("Hello World"));
console.log(firstWord("   "));

// Task - 6
console.log("\n_______________________\n");

function lastWord(string) {
  return string.split(" ").at(-1);
}

console.log(lastWord("Abdullah Albayati"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord(" "));

// Task - 7
console.log("\n_______________________\n");

function firstLastWord(string) {
  let words = string.split(" ");
  return words[0] + words[words.length - 1];
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord(" "));

// Task - 8
console.log("\n_______________________\n");

function startVowel(string) {
  string = string.toLowerCase();
  if (["a", "e", "i", "o", "u"].includes(string.at(0))) {
    return true;
  } else return false;
}
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));

// Task - 9
console.log("\n_______________________\n");

function swap4(string) {
  if (string.length < 8) {
    return "";
  } else if (string.length >= 8) {
    let firstFour = string.slice(0, 4);
    let lastFour = string.slice(-4);
    let middle = string.slice(4, -4);
    return lastFour + middle + firstFour;
  }
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("    "));
console.log(swap4("Apple"));

// Task - 10
console.log("\n_______________________\n");

function swapFirstLastWord(string) {
  if (string.trim().includes(" ") === false) {
    return "";
  } else {
    let word = string.split(" ");
    firstOne = word.at(0);
    lastOne = word.at(-1);
    middle = word.slice(1, -1);
    return `${lastOne} ${middle} ${firstOne}`;
  }
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord(" "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello "));
