/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let result = ''

for(let i = 0; i < input.length; i++) {
  if(input[i] == -1) break;

  let temp = 1;
  let line = '1';
  for(let j = 2; j < Number(input[i]); j++) {
    if(Number(input[i]) % j == 0) {
      temp += j;
      line += ' + ' + j + ''
    }
  }
  
  if(temp == Number(input[i])) {
    line = Number(input[i]) + ' = ' + line
  } else {
    line = Number(input[i]) + ' is NOT perfect.'
  }
  
  result += (line + '\n')
}

console.log(result)
