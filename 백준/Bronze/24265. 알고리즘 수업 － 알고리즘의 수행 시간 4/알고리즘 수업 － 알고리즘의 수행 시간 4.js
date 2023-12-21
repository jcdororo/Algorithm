// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0])

let num = 0;
for (let i = 1; i <= n - 1; i++) {
    num += i;
}
console.log(num);
console.log(2);