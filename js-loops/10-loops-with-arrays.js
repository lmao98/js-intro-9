const numbers = [3, 4, 7, 3, 2, 2, 7];
// find the sum of the numbers that has an even index

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    sum += numbers[i];
  }
}

console.log(sum);

// Using for ... of loop
let sum1 = 0;
let index = 0;

for (const number of numbers) {
  if (index % 2 === 0) {
    sum1 += number;
  }
  index++;
}

console.log(sum1);

// find the product of the number that has odd index

let product = 1;

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    product *= numbers[i];
  }
}
console.log(product);

/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [5, 8, 2, 1, 2];
const arr2 = [9, 3, 5, 1, 0];
const arr3 = [];
console.log(arr1);
console.log(arr2);

for (let i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i] * arr2[i]);
}
console.log(arr3);

// same question but what if you don't know arrays length and which is longer

const array1 = [5, 8];
const array2 = [9, 3, 5, 1, 0];
// [ 45, 24, 5, 1, 0 ]
const array3 = [];
const shortArray = array1.length < array2.length ? array1 : array2;
const longArray = array1.length > array2.length ? array1 : array2;
for (let i = 0; i < shortArray.length; i++) {
  array3.push(array1[i] * array2[i]);
}
console.log(array3.concat(longArray.slice(shortArray.length)));

// decending order

const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];

const a4 = [...a1, ...a2, ...a3];

a4.sort((a, b) => b - a);

console.log(a4);

//
const nums = [-1, 1, 3, 0, 2, 6, 8];
let firstEven;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     firstEven = nums[i];
//     break;
//   }
// }

// console.log("First even number:", firstEven);

for (const num of nums) {
  if (nums[num] % 2 === 0) {
    firstEven = nums[num];
    break;
  }
}
console.log("First even number:", firstEven);

console.log("/n ___________ /n");

let biggestOdd;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    // Check if the number is odd
    if (biggestOdd === undefined || nums[i] > biggestOdd) {
      // If it's the first odd number encountered or greater than the current biggestOdd
      biggestOdd = nums[i]; // Update the biggestOdd
    }
  }
}

console.log(biggestOdd);
