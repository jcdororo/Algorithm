const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


const a = Number(input[0]);
const b = Number(input[1]);

let answer = 0;


for(let i = 0; i < b; i++){
  let c = input[i+2];
  let x = c.split(' ')[0];
  let y = c.split(' ')[1];
  answer += x * y;
}


if(a == answer){
  console.log('Yes');
} else {
  console.log('No');
}
