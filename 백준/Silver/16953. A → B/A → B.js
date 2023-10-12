/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let x = input[0];
let y = input[1];
let answer = 0;

while(true) {
  if(y % 2 === 0) {
    y /= 2;
    answer++;
  } else if((y+'')[(y+'').length-1] == 1) {
    y = parseInt((y+'').substring(0,(y+'').length - 1));
    answer++;
  } else {
    answer = -1;
    break;
  }



  if(y == x){
    break;
  }

  if(y < x) {
    answer = -1;
    break;
  }
}


answer !== -1 ? console.log(answer + 1) : console.log(answer);