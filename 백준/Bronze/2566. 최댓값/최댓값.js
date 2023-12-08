/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const n = Number(input.length);
let point = ''
let result = 0;

for(let i = 0; i < n; i++) {
  let temp = input[i].split(' ');
  for(let j = 0; j < n; j++) {
    result = Math.max(result,temp[j]);
    if(result == temp[j]) {
      point = ((i+1) + ' ' + (j+1))
    }
    
  }
}
console.log(result + '\n' + point )