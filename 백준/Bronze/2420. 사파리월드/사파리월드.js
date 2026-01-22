// /dev/stdin
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = input[0];
const M = input[1];
console.log(Math.abs(N - M));
