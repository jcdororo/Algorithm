function solution(my_string, index_list) {
    var answer = '';
    
    index_list.map((v) => answer += my_string[v])
    
    return answer;
}