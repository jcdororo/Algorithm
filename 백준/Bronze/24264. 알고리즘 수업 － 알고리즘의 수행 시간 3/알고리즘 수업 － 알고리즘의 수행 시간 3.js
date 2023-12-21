// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0])

console.log(Math.pow(n,2))
console.log(2)