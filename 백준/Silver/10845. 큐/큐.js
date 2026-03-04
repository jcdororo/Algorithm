// /dev/stdin
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
const queue = [];
let answer = "";
let head = 0;
let tail = 0;

for (let i = 1; i <= N; i++) {
  const cmd = input[i];
  //answer += cmd + "\n";

  if (cmd.startsWith("push")) {
    const val = Number(cmd.split(" ")[1]);
    queue.push(val);
    tail++;
    continue;
  }

  if (cmd === "pop") {
    if (head === tail) {
      answer += "-1" + "\n";
    } else {
      answer += queue[head] + "\n";
      head++;
      //tail--;
    }
    continue;
  }

  if (cmd === "size") {
    answer += tail - head + "\n";
    continue;
  }

  if (cmd === "empty") {
    if (head === tail) {
      answer += "1" + "\n";
    } else {
      answer += "0" + "\n";
    }
    continue;
  }

  if (cmd === "front") {
    if (head === tail) {
      answer += "-1" + "\n";
    } else {
      answer += queue[head] + "\n";
    }
  }

  if (cmd === "back") {
    if (head === tail) {
      answer += "-1" + "\n";
    } else {
      answer += queue[queue.length - 1] + "\n";
    }
    continue;
  }
}

console.log(answer);
