// /dev/stdin
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);

const stack = [];

for (let i = 1; i <= N; i++) {
  if (input[i] == 0) {
    stack.pop();
  } else {
    stack.push(Number(input[i]));
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
