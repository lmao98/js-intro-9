// arrow function

const greeting = () => {
  console.log("Hello");
};

greeting();

function product1(num1, num2) {
  return num1 * num2;
}
console.log(product1(4, 5));

const product3 = (num1, num2) => {
  return num1 * num2;
};

console.log(product3(4, 5));

const product2 = function (num1, num2) {
  return num1 * num2;
};
console.log(product2(4, 5));

// Enhanced arrow function

const product4 = (num1, num2) => num1 * num2;

const upperCaseName = (str) => str.toUpperCase();
console.log(upperCaseName("John"));
