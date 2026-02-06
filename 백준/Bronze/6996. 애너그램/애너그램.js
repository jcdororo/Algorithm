// /dev/stdin
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x.replace("\r", ""));

const T = input[0];

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ");
  let result = A + " & " + B + " are anagrams.";
  const sortedA = A.split("").sort().join("");
  const sortedB = B.split("").sort().join("");

  for (let j = 0; j < sortedA.length; j++) {
    if (sortedA[j] !== sortedB[j]) {
      result = A + " & " + B + " are NOT anagrams.";
      continue;
    }
  }
  console.log(result);
}
