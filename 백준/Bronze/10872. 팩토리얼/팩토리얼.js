// /dev/stdin
const input = require('fs').readFileSync('/dev/stdin').toString()

let N = parseInt(input)
let result = 1
for(let i = N; i > 0; i--) {
    result *= i
}

console.log(result)
