function solution(array, height) {
    var answer = 0;
    array.map(v => v > height ? answer++ : true)
    return answer;
}