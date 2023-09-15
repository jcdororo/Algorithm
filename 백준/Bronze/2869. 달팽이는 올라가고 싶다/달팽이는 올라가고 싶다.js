// /dev/stdin
// ./input.txt
const input = require('fs')
              .readFileSync('/dev/stdin')
              .toString()
              .split(' ')
              .map(Number);


const up = input[0]
const down = input[1]
const stick = input[2];
let snail = 0;
let day = 1;


console.log(Math.ceil((stick - down) / (up - down)));