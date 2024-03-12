const numbers = [10, 5, 100, 77, 50, 65, 0];

// find all the number 50 and more

const numbersMoreThanFifty = numbers.filter((number) => number >= 50);

console.log(numbersMoreThanFifty);

const fruits = ["Orange", "Apple", "Red apple", "Pineapple", "Kiwi"];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const appleFruits = fruits.filter((fruit) => fruit.toLowerCase().includes("apple"));
console.log(appleFruits);
const hasA = fruits.filter((fruit) => fruit.toLowerCase().includes("a")).length;
console.log(hasA);
const hasI = fruits.filter((fruit) => fruit.toLowerCase().includes("i")).length;
console.log(hasI);

/*
Create a method which takes an array as argument and returns all the even numbers from the original
array as a new array

evens( [ 1, 5, 2, 0, 6, 7 ] )   -> [ 2, 0, 6 ]
evens( [ 4, 5, 2 ] )            -> [ 4, 2 ]

*/

function evens(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(evens([1, 5, 2, 0, 6, 7]));
console.log(evens([4, 5, 2]));
