// Output the numbers from 1 to 10 (both inclusive) -> 1 2 3 4 5 ...

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 ..

for (let i = 100; i >= 0; i--) {
  console.log(i);
}

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 ...
console.log("_________________");

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ...

console.log("_______5__________");

for (let i = 0; i <= 50; i++) {
  if (i % 5 === 0) console.log(i);
}

// Find sum of the numbers from 1 to 5 (both inclusive) -> 15

console.log("_______Sum__________");
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// Find sum of the numbers from 10 to 15 (both inclusive) -> 75
console.log("_______Sum2__________");
sum = 0;

for (let i = 10; i <= 15; i++) {
  sum += i;
}
console.log(sum);

// Output each character from TechGlobal School -> T e c h G l o b a l S c h o o l

console.log("_______Characters__________");

let schoolName = "TechGlobal School";

for (let i = 0; i < schoolName.length; i++) {
  console.log(schoolName[i]);
}

// Count the total occurrences of letter o in TechGlobal School -> 3
console.log("_______Char O__________");
let totalOccurrencesOfO = 0;
// When checking for a character you have to check at the index of [i] instead of the entier string or array because it will give wrong answer
for (let i = 0; i < schoolName.length; i++) {
  if (schoolName[i].toLowerCase().includes("o")) {
    totalOccurrencesOfO++;
  }
}
console.log(totalOccurrencesOfO);

// Output all the odd numbers from 1 to Random Number (both inclusive) -> 1 3 5 7 9

let randomNumber = Math.floor(Math.random() + 1);
