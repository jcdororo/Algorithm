// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n').map(Number);

const [a, b, c] = input

let result = '';

if(a == 60 && b == 60 &&c == 60) {
  result = 'Equilateral'
} else if((a+b+c) == 180 && (a == b || b == c || c == a)) {
  result = 'Isosceles'
} else if((a+b+c) == 180 && (a != b && b != c && c != a)) {
  result = 'Scalene'
} else {
  result = 'Error'
}

console.log(result)