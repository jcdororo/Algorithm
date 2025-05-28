function solution(n, arr1, arr2) {
    var answer = []
    const map1 = arr1.map(v => v.toString(2).padStart(n,'0'))
    const map2 = arr2.map(v => v.toString(2).padStart(n,'0'))
    
    //console.log(map1, map2)
    
    for(let i = 0; i < n; i++) {
        let temp = ''
        for(let j = 0; j < n; j++) {
            temp += makeShop(map1[i][j], map2[i][j])
        }
        answer.push(temp)
    }
    
    return answer;
}

function makeShop(x1, x2) {
    //console.log('x1', x1, 'x2', x2)
    if (x1 === '0' && x2 === '0') {
        return ' '
    }
    
    return '#'
}