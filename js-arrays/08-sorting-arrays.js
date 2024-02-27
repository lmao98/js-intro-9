const names = ["Alex", "Adam", "Jane", "John"];

console.log(names.sort()); // [ 'Adam', 'Alex', 'Jane', 'John' ]

const numbers = [5, 2, 22, 1, 100];

numbers.sort();

console.log(numbers);
// 1, 100, 2, 22, 5
// It will sort the numbers alphabaticlly from Ascii

const nums = [5, 2, 22, 1, 100];

nums.sort((a, b) => a - b);

console.log(nums);
