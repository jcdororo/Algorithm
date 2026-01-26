// /dev/stdin
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function cal(grade) {
  if (grade === "A+") return "4.3";

  if (grade === "A0") return "4.0";

  if (grade === "A-") return "3.7";

  if (grade === "B+") return "3.3";

  if (grade === "B0") return "3.0";

  if (grade === "B-") return "2.7";

  if (grade === "C+") return "2.3";

  if (grade === "C0") return "2.0";

  if (grade === "C-") return "1.7";

  if (grade === "D+") return "1.3";

  if (grade === "D0") return "1.0";

  if (grade === "D-") return "0.7";

  if (grade === "F") return "0.0";

  return null;
}

console.log(cal(input));
