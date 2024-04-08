// Task 01

const fizzBuzz1 = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else return num;
};

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

// Task 02

console.log("\n_______________________\n");

const fizzBuzz2 = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else arr.push(i);
  }
  return arr;
};

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));

// Task 03

console.log("\n_______________________\n");

const findSumNumbers = (str) => {
  let totalSum = 0;
  let currentNumber = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(Number(char))) {
      currentNumber += char;
    } else {
      if (currentNumber !== "") {
        totalSum += Number(currentNumber);
        currentNumber = "";
      }
    }
  }

  if (currentNumber !== "") {
    totalSum += Number(currentNumber);
  }

  return totalSum;
};

console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

// Task 04

console.log("\n_______________________\n");

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

// Task 05

console.log("\n_______________________\n");

const countOccurrencesOfCharacters = (str) => {
  if (str.length === 0) return "";

  const charCounts = {};
  for (let char of str) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  let result = "";
  for (let char in charCounts) {
    result += charCounts[char] + char;
  }

  return result;
};

console.log(countOccurrencesOfCharacters(""));
console.log(countOccurrencesOfCharacters("abc"));
console.log(countOccurrencesOfCharacters("abbcca"));
console.log(countOccurrencesOfCharacters("aaAAa"));
console.log(countOccurrencesOfCharacters("www"));

// Task 06

console.log("\n_______________________\n");

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

// Task 08

console.log("\n_______________________\n");

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

// Task 09

console.log("\n_______________________\n");

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
