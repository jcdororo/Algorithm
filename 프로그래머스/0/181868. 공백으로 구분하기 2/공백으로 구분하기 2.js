function solution(my_string) {
    answer = my_string.split(' ').filter(v => v !== '')
    
    return answer;
}