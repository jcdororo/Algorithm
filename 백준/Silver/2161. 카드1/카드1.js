// /dev/stdin
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const N = Number(input)

const numbers = new Array(N).fill(0).map((_, index) => index + 1);

let result = ''

while(true) {
    result += numbers.shift() + ' '
    
    if(numbers.length === 0) {
        break
    }
    numbers.push(numbers.shift())
}

console.log(result)