/*
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad" )  -> 2
countPalindrome("See you at noon")  -> 1
countPalindrome("Kayak races attracts racecar drivers")  -> 2
countPalindrome("")  -> 0
countPalindrome("No palindrome here")  -> 0
*/

// CountPalidnrome

const countPalindrome = (str) => {
  if (str === "") return 0;
  const isPalindrome = (word) => {
    return word === word.split("").reverse().join("");
  };
  const words = str.split(" ");
  let counter = 0;
  for (const word of words) {
    if (isPalindrome(word.toLowerCase())) {
      counter++;
    }
  }

  return counter;
};

console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(""));
console.log(countPalindrome("No palindrome here"));

// CanFormString

const canFormString = (firstStr, secondStr) => {
  firstStr = firstStr.split(" ").join("").toLowerCase();
  secondStr = secondStr.split(" ").join("").toLowerCase();

  const firstArr = firstStr.split("");
  const secondArr = secondStr.split("");

  firstArr.sort();
  secondArr.sort();

  for (let i = 0; i < secondArr.length; i++) {
    if (!firstArr.includes(secondArr[i])) {
      return false;
    }
    // remove it from the first array to prevent reuse
    else {
      const index = firstArr.indexOf(secondArr[i]);
      firstArr.splice(index, 1);
    }
  }
  return true;
};

console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123"));

/*
rement:
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach")   -> false
isAnagram("listen", "silent")   -> true
isAnagram("astronomer", "moon starer")   -> true
isAnagram("CINEMA", "iceman")   -> true
isAnagram("123", "1234")  -> false
*/

// isAnagram

const isAnagram = (firstStr, secondStr) => {
  firstStr = firstStr.split(" ").join("").toLowerCase();
  secondStr = secondStr.split(" ").join("").toLowerCase();

  const firstArr = firstStr.split("");
  const secondArr = secondStr.split("");

  for (let i = 0; i < secondArr.length; i++) {
    if (!firstArr.includes(secondArr[i])) {
      return false;
    } else {
      const index = firstArr.indexOf(secondArr[i]);
      firstArr.splice(index, 1);
    }
  }
  return true;
};

console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));

/*
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java")  -> 1
countOccurrence("Hello", "World")  -> 0
countOccurrence("Can I can a can", "anc")   -> 3
countOccurrence("Hello", "l")   -> 2
countOccurrence("IT conversations", "IT")   -> 2
*/

// countOccurrence

const countOccurrence = (str1, str2) => {
  let arrOfOccurrences = [];

  for (char of str2) {
    arrOfOccurrences.push(str1.split("").filter((c) => c.toLowerCase() === char.toLowerCase()).length);
  }
  return arrOfOccurrences.sort()[0];
};

console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Hello", "World"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Hello", "l"));
console.log(countOccurrence("IT conversaitons", "IT"));

// isArmstrong

console.log("\n_______________________\n");

const isArmstrong = (num) => {
  const numStr = num.toString();
  const numDigits = numStr.length;
  let sum = 0;

  for (let digit of numStr) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === num;
};

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));

// reverseNumber

const reverseNumber = (num) => {
  let reversed = 0;

  while (num !== 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
};

console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));

// findBiggestNumber

const findBiggestNumber = (str) => {
  let biggestNumber = 0;
  let currentNumber = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(Number(char))) {
      currentNumber += char;
    } else {
      if (currentNumber !== "") {
        biggestNumber = Math.max(biggestNumber, Number(currentNumber));
        currentNumber = "";
      }
    }
    if (currentNumber !== "") {
      biggestNumber = Math.max(biggestNumber, Number(currentNumber));
    }
  }
  return biggestNumber;
};

console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

// fibonacci 1 and 2

const fibonacciSeries1 = (n) => {
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci.slice(0, n);
};

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

// Task 07

console.log("\n_______________________\n");

const fibonacciSeries2 = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));

// find unique

const findUniques = (arr1, arr2) => {
  const uniqueArr = [];
  const map = {};

  for (const num of arr1) {
    if (!map[num]) {
      uniqueArr.push(num);
      map[num] = true;
    }
  }

  for (const num of arr2) {
    if (!map[num]) {
      uniqueArr.push(num);
      map[num] = true;
    }
  }

  return uniqueArr;
};

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));

// isPowerOf3

const isPowerOf3 = (num) => {
  if (num < 1) return false;

  while (num % 3 === 0) {
    num /= 3;
  }

  return num === 1;
};

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));

// removeExtraSpace

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
