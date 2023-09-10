// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();


let a = Number(input);
let answer = 0;
/*
let cnt = 1;
let x = 0;
let y = 0;
0                 6*0         cnt = 1
1+6*0 ~ 6*1       6*1         cnt = 2
1+6*1 ~ 6*3      6*2      cnt = 3
1+6*3 ~ 6*6     6*3       4
1+6*6 ~ 6*10     6*4      5
62 ~
*/

a -= 1;
let cnt = 1;
let x = 0;      // x는 
let y = 1;

if(a < 1){
  answer = 1;
} else {
  while(true){
    if((1 + (6*x)) <= a && a <= (6*y)){
      answer = cnt+1;
      break;
    }
    
    x += cnt;
    cnt += 1;
    y += cnt;  
  }
}

  
console.log(answer)