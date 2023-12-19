// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let minX = 9999;
let minY = 9999;
let maxX = 0;
let maxY = 0;

let newArr = [];

for(let i = 0; i < input.length; i++) {
  const[a, b] = input[i].split(' ').map(Number);
  minX = Math.min(minX, a);
  minY = Math.min(minY, b);
  maxX = Math.max(maxX, a);
  maxY = Math.max(maxY, b);
}

newArr.push(minX + ' ' + minY)
newArr.push(maxX + ' ' + minY)
newArr.push(minX + ' ' + maxY)
newArr.push(maxX + ' ' + maxY)

for(let i = 0; i < newArr.length; i++) {
  let temp = false;
  for(let j = 0; j < input.length; j++) {
    if(input[j].replace('\r','') == newArr[i]) {
      temp = true;
    }
  }
  if(!temp) {
    console.log(newArr[i])
  }
}



