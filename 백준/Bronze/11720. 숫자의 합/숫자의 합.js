// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');


const a = Number(input[0]);
const b = input[1].split('').map(Number);

const result = b.reduce(function add (sum, currValue) {
  return sum + currValue;
},0)

console.log(result);