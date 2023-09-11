// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n').map(String);

const a = Number(input[0]);
const arrInput = [...input];

for(let i = 1; i <= a; i++){
  while(true){
    if(arrInput[i].indexOf('()') !== -1){
      arrInput[i] = arrInput[i].replace('()','');
    } else {
      break;
    }
  }
  if(arrInput[i].includes(')') || arrInput[i].includes('(')){
    console.log('NO')
  } else {
    console.log('YES')
  }
}