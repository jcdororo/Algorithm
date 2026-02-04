// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);

let answer = "";

if (N === 1) {
  console.log(input[1]);
} else {
  const word = input[1];
  for (let i = 0; i < word.length; i++) {
    let tf = true;
    for (let j = 2; j <= N; j++) {
      if (input[j][i] !== word[i]) {
        tf = false;
        break;
      }
    }
    answer += tf ? word[i] : "?";
  }
}

console.log(answer);
