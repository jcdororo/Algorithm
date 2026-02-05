// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const Name = input[0];
const N = Number(input[1]);

let answer = "Z";
let point = -1;

for (let i = 2; i < N + 2; i++) {
  const result = calWord(Name, input[i]);
  if (point < result || (point === result && answer > input[i])) {
    point = result;
    answer = input[i];
  }
}

console.log(answer);

function calWord(Name, word) {
  let L = 0,
    O = 0,
    V = 0,
    E = 0;

  const sumWord = Name + word;

  for (let i = 0; i < sumWord.length; i++) {
    if (sumWord[i] === "L") L++;
    if (sumWord[i] === "O") O++;
    if (sumWord[i] === "V") V++;
    if (sumWord[i] === "E") E++;
  }

  return ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;
}
