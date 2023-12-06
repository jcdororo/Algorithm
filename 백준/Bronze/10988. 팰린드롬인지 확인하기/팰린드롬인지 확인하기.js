/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const t = input[0];
let result = 0;
if(t == t.split('').reverse().join('')) {
  result = 1 
}
console.log(result)