function solution(names) {
    var answer = names.filter((v, i) => i % 5 === 0);
    return answer;
}