// Task 01

const noSpace = (str) => {
  return str.replaceAll(" ", "");
};

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));

// Task 02

console.log("\n_______________________\n");

const replaceFirstLast = (str) => {
  str = str.trim();
  const rest = str.slice(1, -1);
  if (str.length < 2) {
    return "";
  } else {
    return str.at(-1) + rest + str.at(0);
  }
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));

// Task 03

console.log("\n_______________________\n");

// I tried to do it without using if else because includes will alwasy return true or false but it kept giving me wrong answers.
const hasVowel = (str) => {
  const vowel = "aeoui";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      return true;
    }
  }
  return false;
};

console.log(hasVowel(""));
console.log(hasVowel("javaScript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

// Task 04

console.log("\n_______________________\n");

// I could get the current year from new Date.... but in the question it says 2023 so i'll stick to it.
const checkAge = (num) => {
  const currentYear = 2023;
  age = currentYear - num;
  if (age > currentYear || age > 120) return "AGE IS NOT VALID";
  else if (age < 16) return "AGE IS NOT ALLOWED";
  else if (age >= 16) return "AGE IS ALLOWED";
};

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

// Task 05

console.log("\n_______________________\n");

/*

*/

const averageOfEdges = (num1, num2, num3) => {
  let min = Math.min(num1, num2, num3);
  let max = Math.max(num1, num2, num3);
  return (min + max) / 2;
};

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));
console.log(averageOfEdges(-4, 17, 3));

// Task 05

console.log("\n_______________________\n");

/*

*/
