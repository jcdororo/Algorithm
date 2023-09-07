// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');

const a = Number(input[0]);


for(let x = 0; x < a; x++){  
  const b = input[x+1].split(' ');
  const c = Number(b[0]);
  const d = String(b[1]);
  let answer = '';
  for(let j = 0; j < d.length; j++){
    for(let i = 0; i < c; i++){
      answer += d[j]
    }
  }
  console.log(answer);
}