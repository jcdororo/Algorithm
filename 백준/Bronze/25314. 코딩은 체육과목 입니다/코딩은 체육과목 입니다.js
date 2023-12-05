/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])/4;

let result = '';

for(let i = 0; i < n; i++){
  result += 'long '
}

console.log(result + 'int')

