// create a function named divisible5

function divisible5(num) {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisible5(5));
console.log(divisible5(3));
console.log(divisible5(2));
console.log(divisible5(0));
console.log(divisible5(10));

// task 2

function fooBar(num) {
  if (num % 5 === 0 && num % 7 === 0) {
    return "foobar";
  } else if (num % 7 === 0) {
    return "bar";
  } else if (num % 5 === 0) {
    return "foo";
  } else {
    return num;
  }
}

console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(35));

// task 3

function getGrade(num) {
  if (num < 60) {
    return "F";
  } else if (num >= 60 && num < 70) {
    return "D";
  } else if (num >= 70 && num < 80) {
    return "C";
  } else if (num >= 80 && num < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(getGrade(90));
console.log(getGrade(100));
console.log(getGrade(99));
console.log(getGrade(0));
console.log(getGrade(33));
console.log(getGrade(85));
