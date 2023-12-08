/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


let result = '';
const maxLength = Math.max(...input.map(i => i.length));
for(let i = 0; i < maxLength; i++) {
  for(let j = 0; j < input.length; j++) {
      if (!(input[j][i] === undefined)) {
        result += input[j][i] || "";
      }
      
    
  }
}

console.log(result)