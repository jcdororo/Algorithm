function solution(name, yearning, photo) {
    var answer = [];
    for(let i = 0; i < photo.length; i++) {
        let cnt = 0;
        for(let j = 0; j < photo[i].length; j++) {
            //console.log('name.indexOf(photo[i][j])', name.indexOf(photo[i][j]), photo[i][j])
            const x = name.indexOf(photo[i][j])
            if (x !== -1) {
                cnt += yearning[x]
            }
            
        }
        answer.push(cnt)
    }
    return answer;
}