function startTheClass() {
  console.log('Online students! Please send "here" in the chay!');
  console.log("RECAP!");
  console.log("Start with the new topic!");
}
startTheClass();

function generateRandomNumber(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(3, 5));
