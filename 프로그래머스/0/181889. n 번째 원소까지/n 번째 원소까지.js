function solution(num_list, n) {
    var answer = [];
    num_list.map((x, i) => i < n ? answer.push(x) : '')
    return answer;
}