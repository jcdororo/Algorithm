// dev/stdin
const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split('\n');

/*
0 <= 시 <= 23
0 <= 분 <= 59
*/

const a = input[0].split(' ').map(Number);
const hour = a[0];
const min = a[1];
const arlam = Number(input[1]);

function calTime (hour, min, arlam) {
  min += arlam;
  if(min >= 60){
    hour += parseInt((min)/60)    
    min = min - 60*(parseInt((min)/60))
    if(hour > 23) {
      hour -= 24 * (parseInt(hour/24));
    }
  }
  return console.log((hour + ' ' + min).toString())
}


calTime(hour, min, arlam);