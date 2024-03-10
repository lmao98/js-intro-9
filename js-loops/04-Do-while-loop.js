const { generateRandomNumber } = require("../utils/MathHelper.js");

let i = 1;
let j = 1;

while (i <= 3) {
  // false
  console.log("This is while loop block");
  i++;
}

do {
  console.log("This is do-while loop block");
  j++;
} while (j <= 3);

const gameNumber = 4;
let guessedNumber;
let counter = 0;
let found = true;

do {
  guessedNumber = generateRandomNumber(1, 10);
  counter++;

  console.log(guessedNumber);

  if (counter === 5) {
    console.log("You could not find the number after 5 times! GAME OVER LOSER!!!");
    found = false;
    break;
  }
} while (guessedNumber !== gameNumber);

if (found) {
  let timeOrTimes = counter === 1 ? "time" : "times";
  console.log(`The number is found after ${counter} ${timeOrTimes}!`);
}

///////////////////

let attempt = 0;

let randomNumber;

for (i = 1; i <= randomNumber; i++) {
  if (i % 2 === 0) console.log(i);
  attempt++;
}

console.log(attempt);
