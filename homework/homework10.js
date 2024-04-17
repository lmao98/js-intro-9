// Task 01

const calculateTotalPrice1 = (obj) => {
  const priceList = {
    apple: 2.0,
    orange: 3.29,
    mango: 4.99,
    pineapple: 5.25,
  };

  let totalPrice = 0;

  for (let item in obj) {
    if (priceList.hasOwnProperty(item)) {
      totalPrice += obj[item] * priceList[item];
    }
  }

  return totalPrice;
};

console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }));
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }));

// Task 02

console.log("\n_______________________\n");

const calculateTotalPrice2 = (obj) => {
  const priceList = {
    Apple: 2.0,
    Orange: 3.29,
    Mango: 4.99,
    Pineapple: 5.25,
  };

  let totalPrice = 0;

  let appleCount = obj["Apple"] || 0;
  let mangoCount = obj["Mango"] || 0;

  for (let item in obj) {
    if (priceList.hasOwnProperty(item)) {
      totalPrice += obj[item] * priceList[item];
    }
  }

  totalPrice -= Math.floor(appleCount / 2) * priceList["Apple"];

  totalPrice -= Math.floor(mangoCount / 4) * priceList["Mango"];

  return parseFloat(totalPrice.toFixed(2));
};

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 }));
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }));
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }));
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 }));

// Task 03

console.log("\n_______________________\n");

const nthWord = (str, n) => {
  const words = str.split(" ");
  if (n <= words.length) {
    return words[n - 1];
  } else {
    return "";
  }
};

console.log(nthWord("I like programming languages", 2));
console.log(nthWord("QA stands for Quality Assurance", 4));
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1));
console.log(nthWord("", 1));

// Task 04

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

// Task 05

console.log("\n_______________________\n");

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

// Task 06

console.log("\n_______________________\n");

const doubleOrTriple = (arr, isDouble) => {
  return arr.map((num) => (isDouble ? num * 2 : num * 3));
};

console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));
console.log(doubleOrTriple([-1, -2], true));
console.log(doubleOrTriple([0], false));
console.log(doubleOrTriple([-1, 0, 1], true));

// Task 07

console.log("\n_______________________\n");

const splitString = (str, splitingNumber) => {
  if (str.length < splitingNumber || str.length % splitingNumber !== 0) {
    return "";
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && i % splitingNumber === 0) {
      result += " ";
    }
    result += str[i];
  }

  return result;
};

console.log(splitString("JavaScript", 5));
console.log(splitString("Java", 2));
console.log(splitString("Automation", 3));
console.log(splitString("Hello", 6));
console.log(splitString("12", 1));
