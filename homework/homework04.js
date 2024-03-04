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

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // If element already encountered, return it
    if (encountered[arr[i]] !== undefined) {
      return arr[i];
    } else {
      // Otherwise, mark the element as encountered
      encountered[arr[i]] = true;
    }
  }

  // If no duplicates found, return -1
  return -1;
}
const array1 = [3, 7, 10, 0, 3, 10]; // The first duplicate is 2
const array2 = [5, 7, 7, 0, 5, 10]; // The first duplicate is 2
const array3 = [5, "5", 3, 7, 4]; // The first duplicate is 2
const array4 = [123, "abc", "123", 3, "abc"]; // The first duplicate is 2
const array5 = [1, 2, 3]; // The first duplicate is 2
const array6 = ["foo", "abc", "123", "bar"]; // The first duplicate is 2

console.log(firstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 1])); // Output: 2
console.log(firstDuplicate(array2)); // Output: 2
console.log(firstDuplicate(array3)); // Output: 2
console.log(firstDuplicate(array4)); // Output: 2
console.log(firstDuplicate(array5)); // Output: 2
console.log(firstDuplicate(array6)); // Output: 2
