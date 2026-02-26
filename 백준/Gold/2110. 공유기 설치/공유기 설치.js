// /dev/stdin
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ").map(Number);

const Houses = input
  .filter((x, i) => i >= 1)
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = Houses[N - 1] - Houses[0];
let answer = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let count = 1;
  let installed = Houses[0];
  for (let i = 1; i < Houses.length; i++) {
    if (Houses[i] - installed >= mid) {
      count++;
      installed = Houses[i];
    }
  }

  if (count >= C) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
