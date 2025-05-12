function solution(my_string) {
    var answer = my_string.split(' ').filter(v => v !== '');
    return answer;
}