/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
let temp = 0;
let answer = 0;

arr.sort((a,b) => a - b);

for(let i = 0; i < arr.length; i++){
  temp += arr[i];
  answer += temp;
}

console.log(answer)
