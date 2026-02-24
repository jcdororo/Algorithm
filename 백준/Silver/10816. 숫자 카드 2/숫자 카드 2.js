/* /dev/stdin */
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replaceAll("\r", ""));

const N = Number(input[0]);
const myCards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const M = Number(input[2]);
const targetCards = input[3].split(" ").map(Number);
const answer = [];

for (const targetCard of targetCards) {
  const lower = lowerBound(myCards, targetCard);
  const upper = upperBound(myCards, targetCard);

  const result = upper - lower;
  answer.push(result);
}
console.log(answer.join(" "));

function lowerBound(myCards, targetCard) {
  let left = 0;
  let right = myCards.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (myCards[mid] >= targetCard) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function upperBound(myCards, targetCard) {
  let left = 0;
  let right = myCards.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (myCards[mid] > targetCard) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
