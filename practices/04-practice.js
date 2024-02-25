let r1 = Math.floor(Math.random() * 100) + 1;

switch (true) {
  case r1 <= 25:
    console.log("FIRST");
    break;
  case r1 <= 50:
    console.log("SECOND");
    break;
  case r1 <= 75:
    console.log("THIRD");
    break;
  default:
    console.log("FOURTH");
}

console.log(r1);
