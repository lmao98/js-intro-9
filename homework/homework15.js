// Task 01

/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
*/

/*
remove all extra spaces from the str using trim
change str to arr using split
loop the arr and find all spaces
when encounter a space replace it with the next letter but with upper case
retrun the array back and use .join to make it a string again
*/
const toCamelCase = (str) => {
  let words = str.trim().split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  return words.join("");
};

console.log(toCamelCase("first name"));
console.log(toCamelCase("last     name"));
console.log(toCamelCase("   ZIP CODE"));
console.log(toCamelCase("I Learn Java Script"));
console.log(toCamelCase("helloWorld"));

// Task 02

console.log("\n_______________________\n");

/*
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello
*/

const toSnakeCase = (str) => {
  let words = str.trim().split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }

  return words.join("_");
};

console.log(toSnakeCase("first name"));
console.log(toSnakeCase("last    name"));
console.log(toSnakeCase("    I love Java Script"));
console.log(toSnakeCase("already_snake_case"));
console.log(toSnakeCase("hello"));

// Task 03

console.log("\n_______________________\n");

/*
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""
alternatingCases("123!@#aB")  -> "123!@#Ab"
*/

const alternatingCases = (str) => {
  let result = [];
  let toggle = true;

  str.split("").forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      if (toggle) {
        result.push(char.toUpperCase());
      } else {
        result.push(char.toLowerCase());
      }
      toggle = !toggle;
    } else {
      result.push(char);
    }
  });

  return result.join("");
};

console.log(alternatingCases("Hello"));
console.log(alternatingCases("basketball"));
console.log(alternatingCases("Tech Global"));
console.log(alternatingCases(""));
console.log(alternatingCases("123!@#aB"));

// Task 04

console.log("\n_______________________\n");

/*

Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"
*/

const isNeutral = (str1, str2) => {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      result += str1[i];
    } else {
      result += "0";
    }
  }

  return result;
};

console.log(isNeutral("-", "+"));
console.log(isNeutral("-+", "-+"));
console.log(isNeutral("-++-", "-+-+"));
console.log(isNeutral("--++--", "++--++"));
console.log(isNeutral("+++", "+++"));

// Task 05

console.log("\n_______________________\n");

/*
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit")  -> true
isTrueOrFalse("Xylophones can obtain Xenon.")    ->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")  -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")  -> true
isTrueOrFalse("Got stuck in the Traffic")  -> false
*/

const isTrueOrFalse = (str) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstHalf = new Set("ABCDEFGHIJKLM");
  const secondHalf = new Set("NOPQRSTUVWXYZ");

  let positiveCount = 0;
  let negativeCount = 0;

  let words = str.split(" ");

  words.forEach((word) => {
    let firstLetter = word.charAt(0).toUpperCase();

    if (firstHalf.has(firstLetter)) {
      positiveCount++;
    } else if (secondHalf.has(firstLetter)) {
      negativeCount++;
    }
  });

  return positiveCount >= negativeCount;
};

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"));
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"));
console.log(isTrueOrFalse("Got stuck in the Traffic"));
