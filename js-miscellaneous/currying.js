function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}

function quadrople(num) {
  return num * 4;
}

function doMath(operator) {
  if (operator === "+") {
    return function (num1, num2) {
      return num1 + num2;
    };
  } else if (operator === "*") {
    return function (num1, num2) {
      return num1 * num2;
    };
  } else if (operator === "-") {
    return function (num1, num2) {
      return num1 - num2;
    };
  } else if (operator === "/") {
    return function (num1, num2) {
      return num1 / num2;
    };
  } else if (operator === "**") {
    return function (num1, num2) {
      return num1 ** num2;
    };
  }
}

const power = doMath("**");
const sum = doMath("+");
const divide = doMath("/");
const product = doMath("*");

console.log(power(3, 2)); // 9
console.log(sum(3, 2)); // 5
