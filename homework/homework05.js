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

// Task 11

console.log("\n_______________________\n");

const add = (arr1, arr2) => {
  const maxLength = Math.max(arr1.length, arr2.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }

  return result;
};

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

// Task 12

console.log("\n_______________________\n");

const removeExtraSpaces = (str) => {
  return str
    .split(" ")
    .filter((string) => string !== "")
    .join(" ");
};
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

// Task 13

console.log("\n_______________________\n");

function findClosestTo10(arr) {
  let closest = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) continue;

    if (closest === null || Math.abs(arr[i] - 10) < Math.abs(closest - 10)) {
      closest = arr[i];
    } else if (Math.abs(arr[i] - 10) === Math.abs(closest - 10)) {
      closest = Math.min(closest, arr[i]);
    }
  }

  return closest;
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));

// Task 14

console.log("\n_______________________\n");

function isEmailValid(email) {
  const atIndex = email.indexOf("@");
  if (atIndex <= 0 || atIndex === email.length - 1) {
    return false;
  }
  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);
  if (localPart.length < 2) {
    return false;
  }
  if (domainPart.indexOf(".") === -1 || domainPart.indexOf(".") === domainPart.length - 1) {
    return false;
  }
  const [domain, tld] = domainPart.split(".");
  if (domain.length < 2 || tld.length < 2) {
    return false;
  }

  return true;
}

console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

// Task 15

console.log("\n_______________________\n");

function isPasswordValid(password) {
  if (password.length < 8 || password.length > 16) {
    return false;
  }

  let hasDigit = false;
  let hasUppercase = false;
  let hasLowercase = false;
  let hasSpecialChar = false;
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);

    //  if character is a digit (ASCII range: 48-57)
    if (charCode >= 48 && charCode <= 57) {
      hasDigit = true;
    }

    //  if character is an uppercase letter (ASCII range: 65-90)
    if (charCode >= 65 && charCode <= 90) {
      hasUppercase = true;
    }

    //  if character is a lowercase letter (ASCII range: 97-122)
    if (charCode >= 97 && charCode <= 122) {
      hasLowercase = true;
    } // if character is a special character
    if (!((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
      hasSpecialChar = true;
    }
  }
  if (!hasDigit || !hasUppercase || !hasLowercase || !hasSpecialChar) {
    return false;
  }
  if (password.includes(" ")) {
    return false;
  }

  return true;
}

console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));
