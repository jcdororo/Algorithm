// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();

const a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const b = input;
let answer = '';
for(let i = 0; i < a.length; i++){
  if(b.indexOf(a[i]) !== -1){
    answer += String(b.indexOf(a[i])) + ' ';    
  } else {
    answer += '-1 ';
  }
}

console.log(answer.trim());