// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);
let answer = 0;

let left = 0;
let right = Math.max(...trees);

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let high = 0;
  for (const tree of trees) {
    if (tree >= mid) {
      high += tree - mid;
    }
  }

  if (M <= high) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
