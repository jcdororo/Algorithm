function solution(numbers) {
    var answer = 0;
    
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length
    
    answer = average
    
    return answer;
}