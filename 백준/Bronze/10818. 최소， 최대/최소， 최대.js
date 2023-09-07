// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');

const a = input[0];
const b = input[1].split(' ').map(Number);

console.log(Math.min(...b) + ' ' + Math.max(...b))