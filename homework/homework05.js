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

*/

function isPalindrome(str) {
  str = str.toLowerCase();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

// Task 08

console.log("\n_______________________\n");

/*

*/

const countMultipleWords = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim().split(" ").length > 1) counter++;
  }
  return counter;
};

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));

// Task 09

console.log("\n_______________________\n");

/*

*/

const count3OrLess = (str) => {
  let counter = 0;
  str = str.trim().split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length <= 3 && str[i].length > 0) counter++;
  }
  return counter;
};
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

// Task 10

console.log("\n_______________________\n");

/*

*/

const isPrime = (num) => {
  if (num < 2) return false;

  // If the number is divisible by any integer from 2 to its square root (not a prime number)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

// Task 10

console.log("\n_______________________\n");

/*

*/
