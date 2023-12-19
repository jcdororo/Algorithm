// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n');


const n = Number(input[0]);

let minX = 10000;
let minY = 10000;
let maxX = -10000;
let maxY = -10000;

for(let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  minX = Math.min(minX, x);
  minY = Math.min(minY, y);
  maxX = Math.max(maxX, x);
  maxY = Math.max(maxY, y);
}

console.log(Math.abs((maxX - minX) * (maxY - minY)))