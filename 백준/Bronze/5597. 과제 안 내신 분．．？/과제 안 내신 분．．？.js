/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const student = [...input.map(Number)].sort((a,b) => a-b)
let result = [];
for(let i = 1; i <= 30; i++) {
  if(student.indexOf(i) == -1) {
    result.push(i)
  }
}

console.log(result.join('\n'))
