/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');



const count = parseInt(input[0].split(' ')[0]);
const index = parseInt(input[0].split(' ')[1]);
const arrNum = [...input[1].split(' ').map(Number)];

arrNum.sort((a, b) => a - b);


console.log(arrNum[index-1]);


