// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(' ').map(Number);


const [a, b, c, d, e] = input;
let sum = 0;
for(let i = 0; i < input.length; i++){
  sum += Math.pow(input[i], 2);
}
console.log(sum % 10);