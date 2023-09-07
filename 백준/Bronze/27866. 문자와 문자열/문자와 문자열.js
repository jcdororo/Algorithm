// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');


const a = String(input[0]);
const b = Number(input[1]);

console.log(a[b-1])
