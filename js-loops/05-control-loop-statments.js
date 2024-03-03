// count from 1 to 15 but skip 6 and 13

for (let i = 1; i <= 15; i++) {
  if (i === 6 || i === 13) continue;
  console.log("The number is", i);
}
