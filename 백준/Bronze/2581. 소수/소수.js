// dev/stdin
const fs = require("fs");
let input = fs.readFileSync('dev/stdin').toString().split('\n');


const m = Number(input[0]);
const n = Number(input[1]);


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function solve(start, end) {
  const primes = findPrimes(start, end);

  if (primes.length === 0) {
    console.log(-1);
    return;
  }

  const sum = primes.reduce((acc, curr) => acc + curr, 0);
  const min = Math.min(...primes);

  console.log(sum);
  console.log(min);
}

// 입력 예제: 60부터 100까지의 소수를 찾는 경우
solve(m, n);