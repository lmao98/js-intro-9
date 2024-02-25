// Task 1

let t1num1 = 0;
let t1num2 = 0;

if (t1num1 === t1num2) console.log(true);
else console.log(false);

// Task - 2

let t2character = "#";

if (t2character.charCodeAt(0) >= 65 || t2character.charCodeAt(0) <= 90) {
  console.log(`${t2character} is a letter`);
} else if (t2character.charCodeAt(0) >= 97 || t2character.charCodeAt(0) <= 122) {
  console.log(`${t2character} is a letter`);
} else if (t2character.charCodeAt(0) >= 48 || t2character.charCodeAt(0) <= 57) {
  console.log(t2character + "is a number");
} else console.log("INVALID INPUT");

// Task - 3

let t3Chracter = "9";
let t3ascii = t3Chracter.charCodeAt(0);

switch (true) {
  case 65 <= t3ascii && t3ascii <= 90:
    console.log(`${t3Chracter} is an uppercase letter`);
    break;
  case 97 <= t3ascii && t3ascii <= 122:
    console.log(`${t3Chracter} is a lowercase letter`);
    break;
  default:
    console.log("INVALID INPUT");
}

// Task - 4

let t4Character = "@";

let t4ascii = t4Character.charCodeAt(0);

if (t4ascii === 32 || (48 <= t4ascii && t4ascii <= 57) || (65 <= t4ascii && t4ascii <= 90) || (97 <= t4ascii && t4ascii <= 122)) {
  console.log(`${t4Character} is not aspaical character`);
} else console.log(`${t4Character} is a spaical character`);
