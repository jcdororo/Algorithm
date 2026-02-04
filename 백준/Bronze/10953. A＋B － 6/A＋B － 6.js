// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const T = Number(input[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(",").map(Number);
  answer += A + B + "\n";
}

console.log(answer);
