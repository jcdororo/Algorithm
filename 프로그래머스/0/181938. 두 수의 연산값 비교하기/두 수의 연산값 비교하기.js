function solution(a, b) {
    
    const x = parseInt((a+'') + (b+''))
    const y = 2 * a * b
    return x > y ? x : y;
}