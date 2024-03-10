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

const countWords = (str) => {
  let arrayOfWords = str.trim().split(" ");
  return arrayOfWords.length;
};

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

// Task 06

console.log("\n_______________________\n");

/*

*/

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

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(7));

// Task 07

console.log("\n_______________________\n");

/*
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/
