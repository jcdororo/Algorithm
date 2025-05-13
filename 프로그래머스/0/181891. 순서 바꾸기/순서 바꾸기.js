function solution(num_list, n) {
    var answer = num_list
    for(let i = 0; i < n; i++) {
        num_list.push(num_list.shift());            
    }
    return answer;
}