const objects = ["Mouse", "Computer", "Remote"];

const numbers = [10, 15, 20, 25];

let stringObjects = objects.toString(); // convert the array to string
let stringNumbers = numbers.toString(); // convert the array to string

// or you can use .join() which alows argument to sparate

let stringObjects1 = objects.join("|"); // convert the array to string with | as a saprater
let stringNumbers1 = numbers.join("|"); // convert the array to string with | as a saprater

console.log(stringNumbers);
console.log(stringNumbers1);
console.log(stringObjects);
console.log(stringObjects1);
