/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';

for(let i = 0; i < input.length; i++) {
  result += input[i] + '\n'
}

console.log(result);