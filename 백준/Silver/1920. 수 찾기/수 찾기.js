/* /dev/stdin */
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replaceAll("\r", ""));

const N = Number(input[0]);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const M = Number(input[2]);
const arrM = input[3].split(" ").map(Number);

let answer = [];

for (const x of arrM) {
  answer.push(binarySearch(A, x));
}

console.log(answer.join("\n"));

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}
