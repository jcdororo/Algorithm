function solution(numbers) {
    numbers.sort((a,b) => a - b)
    const max1 = numbers.at(-1);
    const max2 = numbers.at(-2);
    
    return max1 * max2;
}