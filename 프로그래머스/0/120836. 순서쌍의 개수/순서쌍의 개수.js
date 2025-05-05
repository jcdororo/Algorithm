function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // i가 n의 약수일 때
            answer++; // (i, n/i) 쌍 추가
            if (i !== n / i) {
                answer++; // (n/i, i) 쌍 추가 (i와 n/i가 다를 때만)
            }
        }
    }
    
    return answer;
}