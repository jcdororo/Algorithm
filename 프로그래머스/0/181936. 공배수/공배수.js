function solution(number, n, m) {
    var answer = 0;
    const isN = number % n
    const isM = number % m
    return isN + isM > 0 ? 0 : 1;
}