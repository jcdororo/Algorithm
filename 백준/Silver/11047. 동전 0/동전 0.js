// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

let [N, K] = input[0].split(" ").map(Number);
const coins = [];
for (let i = N; i > 0; i--) {
  coins.push(input[i]);
}
let answer = 0;

while (K > 0) {
  for (const coin of coins) {
    if (K >= coin) {
      K -= coin;
      break;
    }
  }

  answer++;
}

console.log(answer);
