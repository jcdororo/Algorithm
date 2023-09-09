// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();

const a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const word = input.toLowerCase();
const arr = [];
let answerCount = 0;
let answer = '';

for(let i = 0; i < word.length; i++){    
  if(arr.indexOf(word[i]) === -1){    
    arr.push(word[i])    
  }
}

for(let i = 0; i < arr.length; i++){
  let reg = new RegExp(`${arr[i]}`,"gi");
  if (answerCount == word.match(reg).length) {
    answerCount = word.match(reg).length;
    answer = '?';
  }
  if (answerCount < word.match(reg).length){ 
    answerCount = word.match(reg).length;
    answer = arr[i].toUpperCase();
  } 
  
}
console.log(answer);