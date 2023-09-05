var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n') //채점용

var inform = input[0].split(' ');
var numbers = input[1].split(' ');

var N = parseInt(inform[0]);
var X = parseInt(inform[1]);
var text = []
var index =0;

for(i=0; i < N; i++){
  if( parseInt(numbers[i]) < X){
        
    text[index] = numbers[i]
    index++;  
  }
}
console.log(text.join(' '));