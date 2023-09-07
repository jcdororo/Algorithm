// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);

const num = 42;
let arr = [];
let remain = 0;

for(let i = 0; i < input.length; i++){
  remain = input[i] % num;
  if(arr.indexOf(remain) === -1){
    arr.push(remain)
  }
}

console.log(arr.length)