/*
witre a function that takes any number of arguments and return their product

product()            -> 0
product(5)            -> 5
product(2, 3)            -> 5
product(2, 3, 5)            -> 25

*/

const product = (...args) => {
  if (args === "" || args === undefined || args.length === 0) return 0;
  return args.reduce((acc, curr) => acc * curr, 1);
};

console.log(product());
console.log(product(5));
console.log(product(2, 3));
console.log(product(2, 3, 5));
