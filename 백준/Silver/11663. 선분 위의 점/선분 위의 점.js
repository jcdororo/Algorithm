// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const [N, M] = input[0].split(" ").map(Number);
const points = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const answer = [];
for (let i = 2; i < M + 2; i++) {
  const [x1, x2] = input[i].split(" ").map(Number);

  const lower = lowerBound(points, x1);
  const upper = upperBound(points, x2);

  answer.push(upper - lower);
}

console.log(answer.join("\n"));

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (target < arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
