// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
let answer = "";

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const stack = [];
  let isVPS = true;
  for (const v of word) {
    if (v === "(") {
      stack.push("(");
      continue;
    }

    if (v === ")") {
      if (stack.length === 0) {
        isVPS = false;
        break;
      } else {
        stack.pop();
      }

      continue;
    }
  }
  //console.log(stack);
  if (isVPS && stack.length === 0) {
    answer += "YES \n";
  } else {
    answer += "NO \n";
  }
}

console.log(answer);
