function solution(my_string) {
    var answer = my_string.split('a')
                          .join('')
                          .split('e')
                          .join('')
                          .split('i')
                          .join('')
                          .split('o')
                          .join('')
                          .split('u')
                          .join('')
    return answer;
}