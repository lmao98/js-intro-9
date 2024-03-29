/*
Write a function named countWords() which takes a string argument, and returns the total count of words in the given string when invoked.

countWords("     Javascript is fun       ")			 -> 3
countWords("Cypress is an UI automation tool.    ")	 -> 6
countWords("1 2 3 4")								 -> 4
*/
const countWords = (str) => {
  return str.trim().split(" ").length;
};

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

/*

Write a function named countA() which takes a string argument, and returns the total count of A or a in the given string.

countA("TechGlobal is a QA bootcamp")		-> 4
countA("QA stands for Quality Assurance")	-> 5
countA("Cypress")							-> 0
*/

console.log("\n_______________________\n");

const countA = (str) => {
  let counter = 0;
  str = str.split("");
  for (const char of str) {
    if (char.toLowerCase().includes("a")) counter++;
  }
  return counter;
};

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/*
Write a function named countPos() which takes an array of numbers as an argument, and returns the total count of positive numbers.

countPos([-45, 0, 0, 34, 5, 67])		-> 3
countPos([-23, -4, 0, 2, 5, 90, 123])	-> 4
countPos([0, -1, -2, -3])				-> 0
*/

console.log("\n_______________________\n");

const countPos = (arr) => {
  let count = 0;
  for (const num of arr) {
    if (num > 0) count++;
  }
  return count;
};

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/*
Write a function named removeDuplicates() which takes an array as an argument, and returns it back with duplicates removed.

removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])					-> [10, 20, 35, 60, 70]
removeDuplicates(["1", "2", "3", "2", "3"])							-> ["1", "2", "3"]
removeDuplicates(["javascript", "C#", "ruby", "ruby", "C#", "C++"])	-> ["javascript", "C#", "ruby", "C++"]
*/

console.log("\n_______________________\n");

const removeDuplicates = (arr) => {
  const newArr = [];
  for (const num of arr) {
    if (!newArr.includes(num)) newArr.push(num);
  }
  return newArr;
};

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));
console.log(removeDuplicates(["javascript", "C#", "ruby", "ruby", "C#", "C++"]));

/*
Write a function named removeExtraSpaces() which takes a string as argument, and returns a string that extra spaces have removed.

removeExtraSpaces("  I  am    learning   Javascript   ")	-> "I am learning Javascript"
removeExtraSpaces("Javascript  is fun    ")					-> "Javascript is fun"
removeExtraSpaces("  Cypress   is number  1")				-> "Cypress is number 1"
*/
console.log("\n_______________________\n");

const removeExtraSpaces = (str) => {
  return str
    .split(" ")
    .filter((string) => string !== "")
    .join(" ");
};

console.log(removeExtraSpaces("  I  am    learning   Javascript   "));
