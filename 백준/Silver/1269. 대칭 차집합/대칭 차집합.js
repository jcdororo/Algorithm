// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number)

const a = new Set(input[1].split(' ').map(Number))
const b = new Set(input[2].split(' ').map(Number))


for(const num of input[2].split(' ').map(Number)) {
  a.delete(num)
}
for(const num of input[1].split(' ').map(Number)) {
  b.delete(num)
}

console.log(a.size+b.size)