// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

let result = 0;

for (let i = 0; i < input.length; i++) {
  let modNum = 0;
  if (i % 2 !== 0) {
    modNum = 1;
  }

  for (let j = 0; j < input[i].length; j++) {
    if (j % 2 === modNum && input[i][j] === "F") {
      result++;
    }
  }
}

console.log(result);
