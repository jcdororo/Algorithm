// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const S = input[0];
let cur = S[0];

let cnt0 = cur === "0" ? 1 : 0;
let cnt1 = cur === "1" ? 1 : 0;

for (const v of S) {
  if (cur !== v) {
    cur = v;
    if (v === "0") {
      cnt0++;
    } else {
      cnt1++;
    }
  }
}

console.log(Math.min(cnt0, cnt1));
