// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

let result = "";

for (const word of input) {
  result += word + "\n";
}

console.log(result);
