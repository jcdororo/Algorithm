// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = BigInt(input[0])

console.log(((n*n*n)+'').replace('n',''));
console.log(3);