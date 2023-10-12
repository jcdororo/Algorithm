/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let S = parseInt(input);
let answer = 0;
let numCount = 1;
let temp = 0;

while(true) {
  temp += numCount;

  if(temp > S){
    // console.log(temp);
    break;    
  }
  
  numCount++;
  answer = numCount;
}


console.log(answer-1);