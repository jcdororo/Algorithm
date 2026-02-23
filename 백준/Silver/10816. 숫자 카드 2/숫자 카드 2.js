// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const N = Number(input[0]);
const numberCards = input[1].split(" ").map(Number);
const M = Number(input[2]);
let myCards = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const maps = new Map();

for (const key of myCards) {
  maps[key] = 0;
}

let answer = "";

for (const x of numberCards) {
  const result = binarySearch(myCards, x);
  if (result === 1) {
    maps[x]++;
  }
}

function binarySearch(cards, target) {
  let left = 0;
  let right = cards.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (cards[mid] === target) {
      return 1;
    } else if (cards[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}
myCards = input[3].split(" ").map(Number);
for (const number of myCards) {
  answer += maps[number] + " ";
}

console.log(answer);
