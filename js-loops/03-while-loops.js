let i = 0;

while (i <= 50) {
  console.log(i);
  i += 2;
}

// 1 - 10 all even

i = 1;

let countE = 0;

while (i <= 10) {
  if (i % 2 === 0) countE++;
  i++;
}

console.log(countE);
// find sum of numbers start from 3 - 7

i = 3;

let sum = 0;

while (i <= 7) {
  sum += i;
  i++;
}

console.log(sum);
