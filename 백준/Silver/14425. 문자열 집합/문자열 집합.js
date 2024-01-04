// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)

const setN = new Set(input.slice(1,n+1))
const setM = new Set(input.slice(n+1,n+m+1))
let result = 0;

for (let i = n + 1; i < n + m + 1; i++) {
  if (setN.has(input[i])) {
    result++;
  }
}
console.log(result)