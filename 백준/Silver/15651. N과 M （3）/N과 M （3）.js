/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = [];
for(let i = 0; i < n; i++) arr.push(i + 1);
let tf = Array(n).fill(false);
let selected = [];
let answer = '';


dfs(m, 0);
console.log(answer);

function dfs(m, deps) {
  if(deps == m) {
    let temp = [];
    let strTemp = '';
    for(let x = 0; x < selected.length; x++) temp.push(arr[selected[x]])
    answer += temp.join(' ') + '\n';
    
    return;
    
    
    
  }

  for(let i = 0; i < arr.length; i++) {
    selected.push(i);
    tf[i] = true;
    dfs(m, deps + 1);
    selected.pop();
    tf[i] = false;
  }
  
}