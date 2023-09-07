// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(Number);

const arrNumbers = [0,1,2,3,4,5,6,7,8,9];
const strProduct = String(input[0] * input[1] * input[2]);



for(let i = 0; i < arrNumbers.length; i++){
  let count = 0;
  for(let j = 0; j < strProduct.length; j++){
    if(strProduct[j] == i){
      count++
    }
  }
  console.log(count);
}
