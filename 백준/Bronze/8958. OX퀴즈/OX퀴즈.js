// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

const num = Number(input[0]);


for(let i = 1; i < input.length; i++){
  let numResult = 0;
  let numTemp = 0;
  for(let j = 0; j < input[i].length; j++){
    if(input[i][j] == 'O'){
      numTemp++;
      numResult += numTemp;
    }
    if(input[i][j] == 'X'){
      numTemp = 0;
    }
  }
  console.log(numResult);
}