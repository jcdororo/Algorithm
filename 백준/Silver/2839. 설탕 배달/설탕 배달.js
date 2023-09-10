// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();

let a = Number(input);
let answer = 0;


while(true) {
  if(a % 5 === 0){
    a -= 5;
    answer++;
  } else {
    a -= 3;
    answer++;
  }
  
  if(a === 0){
    break;
  }

  if(a < 0){
    answer = -1;
    break;
  }
  
}
console.log(answer)