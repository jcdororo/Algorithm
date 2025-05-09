function solution(box, n) {
    
    const x = parseInt(box[0] / n) * n
    const y = parseInt(box[1] / n) * n
    const z = parseInt(box[2] / n) * n
    
    var answer = ~~((x * y * z) / (n * n * n))
    return answer;
}