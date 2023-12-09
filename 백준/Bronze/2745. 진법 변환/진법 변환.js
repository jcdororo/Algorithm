/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0].split(' ')[0]
const b = Number(input[0].split(' ')[1]);


const form = [
  '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
]; 

let temp = n.split('');
let result = 0;

for(let i = temp.length-1; i >= 0; i--) {
  let index = form.indexOf(temp[i])
  result += index * (Math.pow(b, temp.length - 1 - i))
  // console.log(result,index, (Math.pow(b, temp.length - 1 - i)))
  
}
console.log(result)


