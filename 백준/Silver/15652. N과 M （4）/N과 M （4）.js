/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = [];
for(let i = 0; i < n; i++) arr.push(i + 1);
let tf = Array(n).fill(false);
let selected = [];
let answer = '';
let start = 0;


dfs(m, 0, start);
console.log(answer);

function dfs(m, deps, start) {
  if(deps == m) {
    let temp = [];
    for(let x = 0; x < selected.length; x++) {
     
        temp.push(arr[selected[x]])
     
      
    }
    answer += temp.join(' ') + '\n';
    
    return;
    
    
    
  }

  for(let i = start; i < arr.length; i++) {

      
        tf[start] = true;
        selected.push(i);
        dfs(m, deps + 1, i);
        selected.pop();
        tf[i] = false;
      
        
        
      
        
      
      
        
      
    
    
  }
  
}