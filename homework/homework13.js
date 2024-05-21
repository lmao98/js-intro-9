// Task 01

/*
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
countVC("Hello")               -> {vowels: 2, consonants: 3}
countVC("Programming")   -> {vowels: 3, consonants: 8}
countVC("123AbC")               -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")             -> {vowels: 0, consonants: 3}
countVC("")                           -> {vowels: 0, consonants: 0}
*/

const countVC = (str) => {
  str = str.toLowerCase();
  const vowels = "aeoui";
  let vowelsCount = {
    vowels: 0,
    consonants: 0,
  };

  for (let char of str) {
    if (vowels.includes(char)) vowelsCount.vowels++;
    if (!vowels.includes(char) && char >= "a" && char <= "z") vowelsCount.consonants++;
  }
  return vowelsCount;
};

console.log(countVC("Hello"));
console.log(countVC("Programming"));
console.log(countVC("123AbC"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""));

// Task 02

console.log("\n_______________________\n");
/*
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
Examples:
countChars("Hello")                           -> {letters: 5}
countChars("Programming 123")   -> {letters: 11, numbers: 3}
countChars("123AbC!@#")               -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")               -> {numbers: 10}
countChars("     ")                                  -> {}
countChars("")                                       -> {}
*/

const countChars = (str) => {
  str = str.trim().toLowerCase();
  countofLNS = { letters: 0, numbers: 0, specials: 0 };

  for (let char of str) {
    if (char >= "a" && char <= "z") countofLNS.letters++;
    else if (!isNaN(Number(char))) countofLNS.numbers++;
    else countofLNS.specials++;
  }

  for (let key in countofLNS) {
    if (countofLNS[key] === 0) {
      delete countofLNS[key];
    }
  }

  return countofLNS;
};

console.log(countChars("Hello"));
console.log(countChars("Programming 123"));
console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));
console.log(countChars("   "));
console.log(countChars(""));

// Task 03

console.log("\n_______________________\n");

/*
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""
*/

const maxOccurrences = (str) => {
  if (!str.trim()) return "";

  const counter = {};

  for (let char of str) {
    if (char !== " ") {
      if (counter[char]) {
        counter[char]++;
      } else {
        counter[char] = 1;
      }
    }
  }

  let maxChar = "";
  let maxCount = 0;

  for (let char in counter) {
    if (counter[char] > maxCount) {
      maxCount = counter[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(maxOccurrences("Hello"));
console.log(maxOccurrences("Occurrences"));
console.log(maxOccurrences("    ab    "));
console.log(maxOccurrences("12   3   21"));
console.log(maxOccurrences("     "));
console.log(maxOccurrences(""));

// Task 04

console.log("\n_______________________\n");

/*
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""
*/

const starOut = (str) => {
  if (str.length === 0) return "";

  let result = "";
  let i = 0;

  while (i < str.length) {
    if (str[i] === "*") {
      while (i < str.length && str[i] === "*") {
        i++;
      }
      i++;
    } else if (i > 0 && str[i - 1] === "*") {
      i++;
    } else if (i < str.length - 1 && str[i + 1] === "*") {
      i++;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
};

console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("xm*sm*sy"));
console.log(starOut("abc"));
console.log(starOut("***"));
console.log(starOut("   "));
console.log(starOut(""));

// Task 05

console.log("\n_______________________\n");

/*
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I")  -> 1
romanToInt("IV")  -> 4
romanToInt("CXII")  -> 112
romanToInt("MMM")  -> 3000
romanToInt("MMMDCCCLXXXVIII")   -> 3888
romanToInt("MDCLXVI")    -> 1666
*/

const romanToInt = (s) => {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let previousValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanMap[s[i]];

    if (currentValue < previousValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    previousValue = currentValue;
  }

  return total;
};

console.log(romanToInt("I"));
console.log(romanToInt("IV"));
console.log(romanToInt("CXII"));
console.log(romanToInt("MMM"));
console.log(romanToInt("MMMDCCCLXXXVIII"));
console.log(romanToInt("MDCLXVI"));
