// /dev/stdin
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function changeWord(str) {
  if (str === str.toUpperCase()) {
    return str.toLowerCase();
  }

  if (str === str.toLowerCase()) {
    return str.toUpperCase();
  }

  return null;
}

let result = "";

for (let i = 0; i < input.length; i++) {
  result += changeWord(input[i]);
}

console.log(result);
