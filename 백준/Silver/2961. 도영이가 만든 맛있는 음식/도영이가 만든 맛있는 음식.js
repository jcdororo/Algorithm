/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = [];
for(let i = 1; i < n+1; i++) arr.push([input[i].split(' ')[0], input[i].split(' ')[1]]);
let tf = Array(n).fill(false);
let selected = [];
let answer = '';
let start = 0;
let min = 99999999;

dfs(n, 0);
console.log(min);

function dfs(m, deps) {
  if(selected.length > 0){
    let tempX = 1;
    let tempY = 0;
    let tempXY = 0;
    
    for(let q = 0; q < selected.length; q++) {
      tempX *= Number(arr[selected[q]][0]);
      tempY += Number(arr[selected[q]][1]);    
    }
    tempXY = Math.abs(tempX - tempY)
    if(tempXY >= 0){
      min = Math.min(min, tempXY)
    }
  }
  if(deps == m) {
    let temp = [];
    for(let x = 0; x < selected.length; x++){
      temp.push(arr[selected[x]])
    } 
        
    return;
  }

  for(let i = 0; i < arr.length; i++) {

      if(tf[i]){
        
      } else {
        tf[i] = true;
        selected.push(i);
        dfs(m, deps + 1);
        selected.pop();
        tf[i] = false;
      }
    
  }
  
}