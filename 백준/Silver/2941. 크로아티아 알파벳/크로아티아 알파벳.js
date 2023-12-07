/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = input[0];

const croatia = [
  ['c='],
  ['c-'],
  ['dz='],
  ['d-'],
  ['lj'],
  ['nj'],
  ['s='],
  ['z=']
];



function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("Q");
  }

  return input.length; // return input일 경우 QeQQak를 반환한다.
}

console.log(solution(t));