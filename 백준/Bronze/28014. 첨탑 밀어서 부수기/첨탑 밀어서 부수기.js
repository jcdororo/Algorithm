// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

//const N = Number(input[0]);
const H = input[1].split(" ").map(Number);

let answer = 0;
let pre = 0;

for (let i = 0; i < H.length; i++) {
  if (pre <= H[i]) {
    answer++;
  }
  pre = H[i];
}

console.log(String(answer));
