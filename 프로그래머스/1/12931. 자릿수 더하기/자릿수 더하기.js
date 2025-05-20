function solution(n)
{
    var answer = 0;
    
    String(n).split('').map(v => answer += parseInt(v))

    return answer;
}