// Task - 01

for (i = 1; i <= 100; i++) {
  if (i % 7 === 0) console.log(i);
}

// Task - 02

for (i = 1; i <= 50; i++) {
  if (i % 2 === 0 || i % 3 === 0) console.log(i);
}

// Task - 03

for (i = 100; i >= 50; i--) {
  if (i % 5 === 0) console.log(i);
}

// Task - 04

for (i = 0; i <= 7; i++) {
  console.log(`The Square of ${i} is = ${i ** 2}`);
}

// Task -05
let sum = 0;
for (i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);
