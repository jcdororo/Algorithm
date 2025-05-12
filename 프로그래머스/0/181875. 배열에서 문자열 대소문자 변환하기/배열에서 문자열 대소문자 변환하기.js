function solution(strArr) {
    var answer = strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
    return answer;
}