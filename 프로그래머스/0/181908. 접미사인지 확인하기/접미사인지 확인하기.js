function solution(my_string, is_suffix) {
    var answer = my_string.substr(-(is_suffix.length)) === is_suffix ? 1 : 0
    
    return answer;
}