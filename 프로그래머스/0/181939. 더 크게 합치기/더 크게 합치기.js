function solution(a, b) {
    const ab = ~~(a+''+b);
    const ba = ~~(b+''+a);
    var answer = ab > ba ? ab : ba;
    return answer;
}