/*
write a function that takes a number and return true if the number is even or false if the number is odd

isEven(4) -> true

*/

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(-2));
console.log(isEven(-7));
// check if a number is odd, return true
function isOdd(number) {
  return isEven(number);
  // or return number % 2 !== 0
}

console.log(isOdd(4));
// write a function that retuns inintals of any given 2 names.
function initials(fname, lname) {
  return `${fname[0]}.${lname[0]}.`;
}

console.log(initials("Abdullah.", "Albayati"));

// Write a function named inits which takes a fullname and return initials

// split from space then get it

function inits(fullName) {
  return fullName[0] + fullName[fullName.indexOf(" ") + 1];
}

console.log(inits("Abdullah Albayati"));
