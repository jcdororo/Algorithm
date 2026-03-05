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
  arr.push(input[i]);
}
let arrPoint = 0;
let answer = "";
let isOk = false;
const stack = [];

for (let i = 1; i <= N; i++) {
  stack.push(i);
  answer += "+" + "\n";

  while (true) {
    if (stack[stack.length - 1] == arr[arrPoint]) {
      stack.pop();
      arrPoint++;
      answer += "-" + "\n";
      if (stack.length === 0 && i === N) {
        isOk = true;
        break;
      }
    } else {
      break;
    }
  }
}

if (!isOk) {
  answer = "NO";
}

console.log(answer);
