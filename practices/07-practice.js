// Task 01
function firstPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      return arr[i];
    }
  }
}

console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));
// Task 02
console.log("_________________");

function lastNeg(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      return arr[i];
    }
  }
}

console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

// Task 03

console.log("_________________");

function firstLongest(arr) {
  let longest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));

// Task 04
console.log("_______________");
function lastShortest(arr) {
  let shortest = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i].length <= shortest.length) {
      shortest = arr[i];
    }
  }

  return shortest;
}

console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));

// Task 05

console.log("_____________");

function max(arr) {
  let greatest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatest) {
      greatest = arr[i];
    }
  }

  return greatest;
}
console.log(max([0, 3, -9, 5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));

// Task 06
console.log("________________");
function min(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}
console.log(min([0, 3, 5, 8]));
console.log(min([-2, 0, -7, 10, -5]));
console.log(min([1, 2, 3, 15]));

// Task 07

console.log("____________");

function commonElements(arr1, arr2) {
  let common = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }

  return common;
}

console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));
console.log(commonElements([30, 50, 70], [20, 100, 300]));
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]));
