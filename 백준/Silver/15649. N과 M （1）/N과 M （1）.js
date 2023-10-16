/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ');
let arr = [];
for(let i = 0; i < n; i++) arr.push(i + 1);
let tf = Array(m).fill(false);
let selected = [];
let answer = '';


dfs(m, 0);
console.log(answer);

function dfs(m, deps) {
  if(deps == m) {
    let temp = [];
    for(let x = 0; x < selected.length; x++) temp.push(arr[selected[x]])
    for(let x = 0; x < temp.length; x++) answer += temp[x] + ' ';
    
    answer += '\n';
    
    
  }

  for(let i = 0; i < arr.length; i++) {
    if(tf[i]) {
      
    } else {
      selected.push(i);
      tf[i] = true;
      dfs(m, deps + 1);
      selected.pop();
      tf[i] = false;
    }
  }
  
}