let num = 1;

let letter;

switch (num) {
  case 1:
    letter = "A";
    break;
  case 2:
    letter = "B";
    break;
  case 3:
    letter = "C";
    break;
  default:
    letter = "";
}

console.log(letter);

const date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());

let day = date.getDate();

switch (day) {
  case 0:
  case 6:
    console.log("WEEKEND");
    break;
  default:
    console.log("WEEKDAY");
}

console.log(day);
