const { generateRandomNumber } = require("../utils/MathHelper.js");
// Task - 01
console.log("\n_______________________\n");

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) console.log(i);
}

// Task - 02
console.log("\n_______________________\n");

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 || i % 3 === 0) console.log(i);
}

// Task - 03
console.log("\n_______________________\n");

for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) console.log(i);
}

// Task - 04
console.log("\n_______________________\n");

for (let i = 0; i <= 7; i++) {
  console.log(`The Square of ${i} is = ${i ** 2}`);
}

// Task -05
console.log("\n_______________________\n");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Task - 06
console.log("\n_______________________\n");

let randomNumber = generateRandomNumber(1, 10);

// Function to calculate factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
let result = factorial(randomNumber);
console.log(`The random number is ${randomNumber} and it's factorial is ${result}`);

// Task - 07
console.log("\n_______________________\n");

function findNumberDivisibleBy5() {
  let attempts = 0;
  let randomNumber;

  do {
    randomNumber = generateRandomNumber(1, 100);
    attempts++;
  } while (randomNumber % 5 !== 0);

  console.log(`Random number is = ${randomNumber} and number of attempts to generate it is = ${attempts}`);
}

findNumberDivisibleBy5();

// Task - 08
console.log("\n_______________________\n");

let countries = ["Germany", "Argentina", "Ukraine", "Romania"];
let countriesSorted = countries.slice().sort();
console.log(countries);
console.log(countriesSorted); // using another variable to save the sorted array is better as sort will change the value of the array.

// Task - 09
console.log("\n_______________________\n");

let cartonDogs = ["Scooby", "Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"];
console.log(cartonDogs);
console.log(cartonDogs.includes("Pluto"));

// Task - 10
console.log("\n_______________________\n");

let cartonCats = ["Garfield", "Tom", "Sylvester", "Azrael"];
console.log(cartonCats.sort());
console.log(cartonCats.includes("Garfield") && cartonCats.includes("Felix"));

// Task - 11
console.log("\n_______________________\n");

let numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);
for (const num of numbers) {
  console.log(num);
}

// Task - 12
console.log("\n_______________________\n");

let objects = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"];
console.log(objects);

let bpCounter = 0;
let bookPenPartialCounter = 0;

for (let i = 0; i < objects.length; i++) {
  if (objects[i].at(0).toLowerCase() === "b" || objects[i].at(0).toLowerCase() === "p") {
    bpCounter++;
  }
}
console.log("Elements starting with 'B' or 'P' =", bpCounter);

for (let i = 0; i < objects.length; i++) {
  if (objects[i].toLowerCase().includes("book") || objects[i].toLowerCase().includes("pen")) {
    bookPenPartialCounter++;
  }
}
console.log("Elements having 'book' or 'pen' =", bookPenPartialCounter);

// Task - 13
console.log("\n_______________________\n");

let numbers1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers1);

let countMoreThan10 = 0;
let i = 0;
do {
  if (numbers1[i] > 10) {
    countMoreThan10++;
  }
  i++;
} while (i < numbers1.length);
console.log("Elements that are more than 10 =", countMoreThan10);

let countLessThan10 = 0;
i = 0;
do {
  if (numbers1[i] < 10) {
    countLessThan10++;
  }
  i++;
} while (i < numbers1.length);
console.log("Elements that are less than 10 =", countLessThan10);

let countEqual10 = 0;
i = 0;
do {
  if (numbers1[i] === 10) {
    countEqual10++;
  }
  i++;
} while (i < numbers1.length);
console.log("Elements that are 10 =", countEqual10);

// Task - 14
console.log("\n_______________________\n");

let firstArray = [5, 8, 13, 1, 2];
let secondArray = [9, 3, 67, 1, 0];
let thirdArray = [];
console.log("1st array is =", firstArray);
console.log("2nd array is =", secondArray);

for (let i = 0; i < firstArray.length; i++) {
  thirdArray.push(Math.max(firstArray[i], secondArray[i]));
}
console.log("3rd array is =", thirdArray);

// Task - 15
console.log("\n_______________________\n");

function firstDuplicate(arr) {
  const encountered = [];

  for (let i = 0; i < arr.length; i++) {
    if (encountered[arr[i]] !== undefined) {
      return arr[i];
    } else {
      encountered[arr[i]] = true;
    }
  }
  return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // Output: 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // Output: 7
console.log(firstDuplicate([5, "5", 3, 7, 4])); // Output: -1
console.log(firstDuplicate([123, "abc", "123", 3, "abc"])); // Output: abc
console.log(firstDuplicate([1, 2, 3])); // Output: -1
console.log(firstDuplicate(["foo", "abc", "123", "bar"])); // Output: -1

// Task - 16
console.log("\n_______________________\n");

function getDuplicates(arr) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];

    if (seen[currentItem] !== undefined) {
      if (!duplicates.includes(currentItem)) {
        duplicates.push(currentItem);
      }
    } else {
      seen[currentItem] = true;
    }
  }

  return duplicates;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

// Task - 17
console.log("\n_______________________\n");

function reverseStringWords(str) {
  let words = str.trim().split(" ");
  let reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    let reversedWord = words[i].split("").reverse().join("");
    reversedWords.push(reversedWord);
  }
  let reversedString = reversedWords.join(" ");

  return reversedString;
}

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));

// Task - 18
console.log("\n_______________________\n");

function getEvens(start, end) {
  let evens = [];

  if (start > end) {
    // swapping the values of start and end to make sure start is less than end
    let temporary = start;
    start = end;
    end = temporary;
  }
  if (start % 2 !== 0) {
    start++;
  }

  for (let i = start; i <= end; i += 2) {
    evens.push(i);
  }

  return evens;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

// Task - 19
console.log("\n_______________________\n");

function getMultipleOf5(num1, num2) {
  let divisableByFive = [];

  if (num1 > num2) {
    let temporary = num1;
    num1 = num2;
    num2 = temporary;
  }
  for (let i = num1; i <= num2; i++) {
    if (i % 5 === 0) divisableByFive.push(i);
  }
  return divisableByFive;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

// Task - 20
console.log("\n_______________________\n");

function fizzBuzz(start, end) {
  let result = "";

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    } else {
      result += i;
    }

    if (i < end) {
      result += " | ";
    }
  }

  return result;
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));
