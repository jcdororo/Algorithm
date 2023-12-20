// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let result = '';

for(let i = 0; i < input.length ; i++) {
  const [a, b, c] = input[i].split(' ').map(Number)
  if(a == 0 || b == 0 || c == 0) continue;
  const max = Math.max(a, b, c);
  const sum = [a, b, c].reduce((x, r) => x + r) - max;  
  if(max < sum) {
    if(a == b && b == c && c == a) {
      result += 'Equilateral ' + '\n'
    } else if((a == b && (a != c && b != c)) || (b == c && (b != a && c != a)) || (c == a && (c != b && a != b))) {
      result += 'Isosceles' + '\n'
    } else if(a != b && b != c && c != a){
      result += 'Scalene ' + '\n'
    }
  } else {
    result += 'Invalid ' + '\n'
  }

 

  
}
console.log(result)