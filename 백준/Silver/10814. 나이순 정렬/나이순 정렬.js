/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const count = parseInt(input[0]);
const arr = [];
let answer = '';

for(let i = 1; i < count+1; i++){
  let temp = input[i].split(' ');
  arr.push([temp[0], temp[1]]);
}

arr.sort(compare);

for(let i = 0; i < arr.length; i++){
  answer += (arr[i][0] + ' ' + arr[i][1] + '\n');
}

console.log(answer)



function compare(a, b) {
  return a[0] - b[0]
}