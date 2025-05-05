function solution(num_list) {
    let odd = 0         //홀수
    let even = 0        //짝수
    
    num_list.map(v => v % 2 === 0 ? even++ : odd++)
    
    
    return [even,odd];
}