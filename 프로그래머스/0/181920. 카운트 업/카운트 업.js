function solution(start_num, end_num) {
    var answer = Array.from({ length : (end_num + 1)- start_num}).map((_, i) => i + start_num)
    console.log(answer)
    return answer;
}