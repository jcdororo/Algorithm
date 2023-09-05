
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const a = input[0];


//const a = 5;
let b = '';


for(let j = 1; j <= a; j++){  
  for(let i = (a-j); i > 0; i--){
    b+= ' ';
  }
  for(let i = 0; i < j; i++){
    b += '*'    
  }
  b+='\n';
  
}
console.log(b);