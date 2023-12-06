/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ')

a = Number(a.split('').reverse().join(''));
b = Number(b.split('').reverse().join(''));

console.log(Math.max(a,b))