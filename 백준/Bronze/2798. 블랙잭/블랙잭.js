// /dev/stdin
// ./input.txt
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0].split(' ')[0]);
const standard = Number(input[0].split(' ')[1]);
const cards = input[1].split(' ').map(Number)

//267
let answer = 0;


  for(let i = 0; i < count; i++){
    for(let j = i+1; j < count; j++){
      for(let k = j+1; k < count; k++){
        // console.log('i:' + i + ' j:' + j + ' k:' + k)
        const sum = cards[i] + cards[j] + cards[k];
        const gap = standard - sum;
        if(gap >= 0 && answer <= sum){
           answer = sum;
        }
  
  
      }
  
  
  
    }
  
  
  
  }
  



console.log(answer);