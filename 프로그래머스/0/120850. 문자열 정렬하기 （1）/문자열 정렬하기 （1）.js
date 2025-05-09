function solution(my_string) {
    var answer = [];
    
    for(let i = 0; i < my_string.length; i++) {
        // console.log(my_string[i]*1, parseInt(my_string[i]))
        if(!isNaN(parseInt(my_string[i]))) {
            answer.push(parseInt(my_string[i]))
        }
    }
    answer.sort()
    return answer;
}