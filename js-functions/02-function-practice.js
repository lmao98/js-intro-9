/*
create a function named as sayHi which outputs'Hi' to the console when invoked
*/
function sayHi() {
  console.log("Hi");
}

sayHi();

/*
write a function named as sayHello which takes a name (string) and outputs Hello (name)
*/

function sayHello(name) {
  console.log(`Hello ${name}!`);
}

sayHello("Mo");

// write a function named as gret which takes two arguments as name and greeting as output

function greet(fullName, greetings) {
  console.log(`${greetings}, ${fullName}`);
}

greet("Ali", "Good Morning");

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum(num1, num2) {
  return num1 + num2;
}

sum(3, 5);
sum(4, 7);
sum(-2, 3);

/*
Write a function name as product which takes 3 number argumeents and return their product

product(2,4,5) -> 40
*/

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(product(2, 4, 5));
