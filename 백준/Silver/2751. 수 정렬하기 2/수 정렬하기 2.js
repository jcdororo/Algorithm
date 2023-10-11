/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const count = input[0];
let answer = '';
let newArr = [];

for(let i = 1; i < count+1; i++){
  newArr.push(input[i]);
}


newArr.sort(compare)

console.log(newArr.join('\n'));



function compare(a, b)  {
  return a-b;
}
