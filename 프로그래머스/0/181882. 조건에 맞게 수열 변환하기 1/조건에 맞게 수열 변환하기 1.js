function solution(arr) {
    var answer = arr.map(v => (v >= 50 && v % 2 === 0) ? parseInt(v / 2) : 
                         (v < 50 && v % 2 === 1)
                         ?
                         v * 2
                         :
                         v);
    return answer;
}