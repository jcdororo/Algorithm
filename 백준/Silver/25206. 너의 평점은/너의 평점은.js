/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const maps = {
  'A+':4.5,
  'A0':4.0,
  'B+':3.5,
  'B0':3.0,
  'C+':2.5,
  'C0':2.0,
  'D+':1.5,
  'D0':1.0,
  'F' :0.0,
}

let x = 0; //(학점 * maps)
let sum = 0;

for(let i = 0; i < input.length; i++) {
  let [a, myX, myMaps] = input[i].split(' ');
  

  //myMaps = myMaps.replace('\r','')
  myX = Number(myX);

  if(myMaps == 'P') {

  } else {
    x += (myX * maps[myMaps]);
    sum += myX;
  }
}
console.log((x / sum).toFixed(6));