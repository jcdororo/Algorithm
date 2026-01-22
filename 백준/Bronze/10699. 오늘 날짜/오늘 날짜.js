// /dev/stdin
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const today = new Date();
const yyyy = today.getFullYear();
const MM = String(today.getMonth() + 1).padStart(2, "0");
const dd = today.getDate();
console.log(`${yyyy}-${MM}-${dd}`);
