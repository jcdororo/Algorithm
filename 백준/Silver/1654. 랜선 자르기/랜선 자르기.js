// /dev/stdin
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lines = [];
for (let i = 1; i <= K; i++) {
  lines.push(Number(input[i]));
}
let answer = 0;

parametricSearch(lines);

function parametricSearch(lines) {
  let left = 0;
  let right = Math.max(...lines);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (const line of lines) {
      count += Math.floor(line / mid);
    }
    if (count >= N) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(answer);
