// Task 01

const countPos = (arr) => {
  let positiveNums = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positiveNums++;
  }
  return positiveNums;
};

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

// Task 02

console.log("\n_______________________\n");

const countA = (str) => {
  let numOfA = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase().includes("a")) numOfA++;
  }
  return numOfA;
};

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

// Task 03

console.log("\n_______________________\n");

const countVowels = (str) => {
  const vowels = "AEIOUaeiou";
  let vowelNum = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowelNum++;
  }
  return vowelNum;
};

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

// Task 04

console.log("\n_______________________\n");

const countConsonants = (str) => {
  const vowels = "AEIOUaeiou";
  let consonantCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) consonantCount++;
  }
  return consonantCount;
};

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

// Task 05

console.log("\n_______________________\n");

/*
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") 
-> 6 countWords("1 2 3 4") 
-> 4
*/
