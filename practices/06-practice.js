// Task - 1
let r1 = Math.floor(Math.random() * 100 + 1);

if (r1 <= 25) console.log(`1st quarter is 1-25`);
else if (r1 <= 50) console.log(`2nd quarter is 26-50`);
else if (r1 <= 75) console.log(`1st quarter is 51-75`);
else console.log(`4th quarter is 76-100`);

// Task - 2
let task2r1 = Math.floor(Math.random() * (100 + 1));
let task2r2 = Math.floor(Math.random() * (100 + 1));
let task2r3 = Math.floor(Math.random() * (100 + 1));
console.log(task2r1);
console.log(task2r2);
console.log(task2r3);
console.log(task2r1 % 2 === 0);
console.log(task2r2 % 2 === 0);
console.log(task2r3 % 2 === 0);

// Task - 3

let t3character = "@";

let t3ascii = t3character.charCodeAt(0);

if (48 <= t3ascii && t3ascii <= 57) console.log(`"${t3character}" is a digit`);
else if ((65 <= t3ascii && t3ascii <= 90) || (97 <= t3ascii && t3ascii <= 122)) console.log(`"${t3character}" is a letter`);
else if (t3ascii === 32) console.log(` "${t3character}" is a whitespace`);
else console.log(` "${t3character}" is a special character`);

// Task - 4

function hasBlue(wrd) {
  return wrd.toLowerCase().includes("blue");
}

console.log(hasBlue("Hello World"));
console.log(hasBlue("Javabluescript"));
console.log(hasBlue("Tech Blue Global"));
console.log(hasBlue("1234"));
console.log(hasBlue("ABLUEC"));

// Task - 5

function starT(str) {
  return str.toLowerCase().startsWith("t");
}
console.log(starT("Thomas"));
