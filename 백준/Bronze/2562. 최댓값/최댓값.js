const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();

input = input.split('\n').map(Number);

const numMax = Math.max(...input);
const indexNum = input.indexOf(numMax) + 1;

console.log(numMax);
console.log(indexNum);