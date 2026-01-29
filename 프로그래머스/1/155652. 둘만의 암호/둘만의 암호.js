// 프로그래머스 둘만의 암호 문제 해답이야
function solution(s, skip, index) {
    var answer = '';
    const alphabet = {
        1:'a',
        2:'b',
        3:'c',
        4:'d',
        5:'e',
        6:'f',
        7:'g',
        8:'h',
        9:'i',
        10:'j',
        11:'k',
        12:'l',
        13:'m',
        14:'n',
        15:'o',
        16:'p',
        17:'q',
        18:'r',
        19:'s',
        20:'t',
        21:'u',
        22:'v',
        23:'w',
        24:'x',
        25:'y',
        26:'z'
    }
    
    for(let i = 0; i < s.length; i++) {
        let findIndex = Number(Object.keys(alphabet).find(key => alphabet[key] === s[i]))
        
        let move = 0
        let curIndex = findIndex

        while (move < index) {
            curIndex++
            if (curIndex > 26) curIndex = 1

            if (skip.indexOf(alphabet[curIndex]) === -1) {
                move++
            }
        }

        answer += alphabet[curIndex]
    }
    return answer;
}