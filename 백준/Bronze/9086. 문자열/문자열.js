/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);
let result = '';

for(let i = 1; i <= T; i++) {
  let temp = input[i].split('');
  result += temp[0] + temp[(temp.length)-1] + '\n'
}


console.log(result)