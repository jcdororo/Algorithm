/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for(let i = 1; i <= count; i++){
  

  let num = input[i];
  let Fibonacci = [];
  
  let x = 1;
  let y = 1;
  Fibonacci.push(x);
  
  while(true){
    let Fibo = x + y;
    if(Fibo > num) break;
    
    Fibonacci.push(Fibo);
    x = y
    y = Fibo  
  }
  
  Fibonacci.sort((a, b) => b - a)
  
  let answer = [];
  for(let i = 0; i < Fibonacci.length; i++){
    if(num >= Fibonacci[i]){
      answer.push(Fibonacci[i]);    
      num -= Fibonacci[i];
    }
  }
  

  answer.sort((a, b) => a - b);
  
  console.log(answer.join(' '))


}