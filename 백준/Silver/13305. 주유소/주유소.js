/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);
const arrKm = input[1].split(' ').map(Number);
const arrOil = input[2].split(' ').map(Number);
const flagPrice = arrKm[0] * arrOil[0]
let answer = 0;

let arr2Km = [];
let arr2Oil = [];

for(let i = 1; i < arrKm.length; i++){
  arr2Km.push(arrKm[i]);
}

for(let i = 1; i < arrOil.length - 1; i++){
  arr2Oil.push(arrOil[i])
}
let minPrice = Math.min(...arr2Oil);

for(let i = 0; i < arr2Km.length; i++){
  answer += (minPrice*arr2Km[i]);
}



console.log(answer + flagPrice);