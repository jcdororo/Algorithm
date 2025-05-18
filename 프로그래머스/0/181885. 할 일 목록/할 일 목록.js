function solution(todo_list, finished) {
    var answer = todo_list.filter((v, i) => !finished[i]);
    return answer;
}