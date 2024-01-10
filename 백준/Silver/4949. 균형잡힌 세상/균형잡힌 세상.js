// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let result = '';

for(let i = 0; i < input.length; i++) {
  let stack = [];
  const word = input[i];
  let isBalance = true;

  if(word == '.') break;

  for(let i = 0; i < word.length; i++) {
    if(word[i] == '(') {
      stack.push('(')
    } else if(word[i] == ')') {
      if(stack[stack.length-1] == '(') {
        stack.pop()
      } else {
        isBalance = false;
        break;
      }
    } else if(word[i] == '[') {
      stack.push('[')
    } else if(word[i] == ']') {
      if(stack[stack.length-1] == '[') {
        stack.pop()
      } else {
        isBalance = false;
        break;
      }
    }
  }
  if(stack.length > 0 || !isBalance) {
    result += 'no \n'
  } else {
    result += 'yes \n'
  }
}
console.log(result)
