function solution(n, k) {
    const lambPrice = 12000;
    const drinkPrice = 2000;
    
    
    return (n * lambPrice) + (k * drinkPrice) - (Math.floor(n / 10) * drinkPrice);
}