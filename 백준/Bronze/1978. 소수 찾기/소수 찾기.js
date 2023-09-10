// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');

const a = input[0];
const arrNumber = input[1].split(' ').map(Number);

let answer = 0;

for(let i = 0; i < arrNumber.length; i++){
  let count = 0;
  for(let j = 1; j <= arrNumber[i]; j++){    
    if(arrNumber[i] % j === 0){
      count++;
    }    
  }
  if(count === 2){
    answer++;
  }
}

console.log(answer)