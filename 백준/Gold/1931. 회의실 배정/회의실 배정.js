// /dev/stdin
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}
arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let answer = 1;
let point = arr[0][1];

for (let i = 1; i < N; i++) {
  const [x, y] = arr[i];
  if (point <= x) {
    answer++;
    point = y;
  }
}

console.log(answer);
