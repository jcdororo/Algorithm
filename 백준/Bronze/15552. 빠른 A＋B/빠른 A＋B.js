/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let result = '';
for(let i = 1; i <= n; i++) {
  result +=input[i].split(' ').map(Number).reduce((pre, cur) => pre + cur) + '\n'
}

console.log(result)