function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],                  // 1번 수포자 (길이 5)
        [2, 1, 2, 3, 2, 4, 2, 5],          // 2번 수포자 (길이 8)
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]     // 3번 수포자 (길이 10)
    ];
    
    const scores = [0, 0, 0];  // 각 수포자의 맞힌 개수
    
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                scores[j]++;
            }
        }
    }
    
    const maxScore = Math.max(...scores);
    const answer = [];
    
    for (let j = 0; j < 3; j++) {
        if (scores[j] === maxScore) {
            answer.push(j + 1);  // 수포자 번호는 1,2,3
        }
    }
    
    return answer;  // 이미 1→2→3 순서로 검사하므로 오름차순 보장
}