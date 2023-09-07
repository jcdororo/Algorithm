// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();


let a = '';
if(input.split(' ')[0] !== ''){
  a = input.split(' ');  
}



console.log(a.length)