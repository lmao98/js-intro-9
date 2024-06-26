// Task 1

const hasLowerCase = (str) => {
  str = str.trim();
  if (str === "" || str === isNaN(Number(str))) return false;
  for (let char of str) {
    if (char >= "a" && char <= "z") return true;
  }
  return false;
};

console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));

// Task 02

console.log("\n_______________________\n");

const noZero = (arr) => {
  return arr.filter((number) => number !== 0);
};

console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));

// Task 03

console.log("\n_______________________\n");

const numberAndSquare = (arr) => {
  return arr.map((number) => [number, Math.pow(number, 2)]);
};

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));

// Task 04

console.log("\n_______________________\n");

const containsValue = (arr, str) => {
  str = str.trim();
  for (const word of arr) {
    if (str.includes(word.toLowerCase())) return true;
  }
  return false;
};

console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));

// Task 05

console.log("\n_______________________\n");

const reverseSentence = (str) => {
  const words = str.split(" ");
  if (words.length <= 2) return "There is not enough words!";
  words.reverse();
  // Making sure the first char is uppercase and the last word is lowercase.
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  words[words.length - 1] = words[words.length - 1][0].toLowerCase() + words[words.length - 1].slice(1);
  return words.join(" ");
};

console.log(reverseSentence("Hello"));
console.log(reverseSentence("Javascript is fun"));
console.log(reverseSentence("This is a sentence"));

// Task 06

console.log("\n_______________________\n");

const removeStringSpecialsDigits = (str) => {
  let result = "";
  for (const char of str) {
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || char === " ") {
      result += char;
    }
  }
  return result;
};

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));

// Task 07

console.log("\n_______________________\n");

const removeArraySpecialsDigits = (arr) => {
  return arr.map((str) => {
    // map over each word in the array
    let result = "";
    for (let i = 0; i < str.length; i++) {
      // loop over each character of each word
      const char = str[i];
      if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || char === " ") {
        result += char;
      }
    }
    return result;
  });
};

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));

// Task 08

console.log("\n_______________________\n");

const getCommons = (arr1, arr2) => {
  return arr1.filter((str) => arr2.includes(str));
};

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]));

// Task 09

console.log("\n_______________________\n");

const noXInVariables = (arr) => {
  return arr.filter((element) => {
    if (typeof element !== "string") return true;
    // keeping all the non string characters and making sure the string of x isn't included in the final return
    return !element.toLowerCase().includes("x");
  });
};

console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));
