/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let result = '';
for(let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  if(a == b) break;

  if(b % a == 0) {
    result += 'factor \n'
  } else if(a % b == 0) {
    result += 'multiple \n'
  } else {
    result += 'neither \n'
  }
}


console.log(result)
