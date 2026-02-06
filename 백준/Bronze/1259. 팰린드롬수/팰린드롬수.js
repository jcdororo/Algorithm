// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") {
    break;
  }

  let result = "yes";
  for (let j = 0; j < input[i].length; j++) {
    //console.log("input[i]", input[i], "input[i].at(-j)", input[i].at(-j), "j", j);
    //console.log(input[i][j], input[i].at(-(j + 1)));
    if (input[i][j] !== input[i][input[i].length - 1 - j]) {
      result = "no";
      break;
    }
  }
  console.log(result);
}
