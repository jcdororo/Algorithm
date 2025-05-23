function solution(n) {
    var answer = 0;
    const a = Math.sqrt(n)
    if(Number.isInteger(a)) {
        return (a+1) * (a+1)
    } else {
        return -1
    }
}