/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = parseInt(input[0]);
const arrObj = [];
let answer = '';

for(let i = 1; i <= count; i++){
  let [ a, b ] = input[i].split(' ')

  arrObj.push([a, b]);
}

arrObj.sort(compare)


for(let i = 0; i < arrObj.length; i++){
  answer = answer + arrObj[i].join(' ') + '\n';
}

console.log(answer);



function compare (a, b) {

  if(a[0] == b[0]){
    return a[1] - b[1];
  }
  
  return a[0] - b[0]
  
}