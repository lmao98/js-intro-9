/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 		                -> "APPLE"
"Java is not a scripting programming language"  	-> "JavaScript"
"I don't like books" 			                    -> "I like books"
*/

let sentence1 = "I like apples and oranges";
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

console.log(sentence1.slice(7, 12).toUpperCase());
console.log(sentence2.slice(0, 4) + sentence2[14].toUpperCase() + sentence2.slice(15, 20));

s1 = "JavaScript";

console.log(`The length is = ${s1.length}`);
console.log(`The first char is = ${s1[0]}`);
console.log(`The last char is = ${s1.at(-1)}`);

// let vowel = ["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"];

// console.log(s1.includes(vowel));

// Task - 3
// finding the middle char if name is odd

let s2 = "viktoriya";
console.log(s2[(s2.length - 1) / 2]);

// Math.floor(str.length / 2)

let s3 = "ABCD";
console.log(s3[s3.length / 2] + s3[s3.length / 2 - 1]);

// task - 5

let s4 = "abcd";

console.log(`The first 2 characters are = ${s4.slice(0, 2)}`);
console.log(`The last 2 characters are = ${s4.slice()}`);

// task - 9

let s8 = "I like Apple";

let arr = s8.split(" ");

console.log(arr[0], arr[1], arr[arr.length - 1]);
