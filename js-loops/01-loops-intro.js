// print 1,2,3,4,5,6,7,8,9,10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// backwords 5,4,3,....

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 0, 2, 4, 6 ....

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 50, 40, 30, 20 ...

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

// print and save it in array 1,2,3,4,5,6,7,8,9,10
let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}

console.log(arr.join(" ,"));
