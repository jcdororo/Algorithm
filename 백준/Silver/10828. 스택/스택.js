// /dev/stdin
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
const STACK = [];
let answer = "";

for (let i = 1; i <= N; i++) {
  const cmd = input[i];

  if (cmd.startsWith("push")) {
    const val = Number(cmd.split(" ")[1]);
    STACK.push(val);
    continue;
  }

  if (cmd === "pop") {
    answer += (STACK.length ? STACK.pop() : -1) + "\n";
    continue;
  }

  if (cmd === "size") {
    answer += STACK.length + "\n";
    continue;
  }

  if (cmd === "empty") {
    answer += (STACK.length === 0 ? 1 : 0) + "\n";
    continue;
  }

  if (cmd === "top") {
    answer += (STACK.length > 0 ? STACK[STACK.length - 1] : -1) + "\n";
    continue;
  }
}

console.log(answer);
