/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();


const nums = input.split('-');
let answer = 0;


for(let i = 0; i < nums.length; i++){
  let sums = nums[i].split('+').map(Number).reduce((a,b) => a + b);
  if(i == 0 ) {
    answer += sums;
  } else {
    answer -= sums;
  }
}


console.log(answer);