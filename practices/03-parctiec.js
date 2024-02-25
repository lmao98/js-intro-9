// TASK 1

function tripleWord(string) {
  let triplestring = string.repeat(3);

  return triplestring;
}

console.log(tripleWord("Ali"));

// TASK 2

function has4(string) {
  return string.length >= 4;
}

console.log(has4("Ali"));

// TASK 3

function celciusToFahrenhenheit(celsius) {
  let farhrenheit = (celsius * 9) / 5 + 32;
  return farhrenheit;
}
console.log(celciusToFahrenhenheit(20));

// Task 4

function kgToPounds(kg) {
  let pounds = kg * 2.2;
  return pounds;
}

console.log(kgToPounds(0));
console.log(kgToPounds(100));
console.log(kgToPounds(-4));
console.log(kgToPounds(20.5));

// TASK 5

function rectangleArea(x, y) {
  return x * y;
}

function rectanglePerimeter(x, y) {
  return 2 * (x + y);
}

console.log(`Area = ${rectangleArea(2, 3)}
Perimeter = ${rectanglePerimeter(2, 3)}`);

// Task 6

function squareArea(x) {
  return x * x;
}

function squarePerimeter(x) {
  return 4 * x;
}

console.log(`Area = ${squareArea(2)}
Perimeter = ${squarePerimeter(2)}`);
