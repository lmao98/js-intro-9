// const obj = {
//   fname: "A",
//   lname: "B",
// };

// console.log(obj); // { fname: 'A', lname: 'B' }

// console.log(`${obj}`); // [object Object]

// function miniMaxSum(arr) {
//   let min = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     max += arr[i];
//   }

//   min = max - arr[arr.length - 1];
//   return min + " " + max;
// }

// console.log(miniMaxSum([1, 2, 3, 4, 5]));

function miniMaxSum(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const minSum = sum - max;
  const maxSum = sum - min;

  return minSum + " " + maxSum;
}

function lonelyinteger(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}
