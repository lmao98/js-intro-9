const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countEP = 0;

for (const num of numbers) {
  if (num >= 0 && num % 2 === 0) countEP++;
}

console.log(countEP);
