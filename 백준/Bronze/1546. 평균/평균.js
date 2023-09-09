// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');

const a = Number(input[0]);
const arrNum = input[1].split(' ').map(Number);
const numMax = Math.max(...arrNum);
let sum = 0;



for(let i = 0; i < arrNum.length; i++){
  arrNum[i] = arrNum[i]/numMax*100;
  sum += arrNum[i]
  
}

console.log((sum / a).toFixed(2))

