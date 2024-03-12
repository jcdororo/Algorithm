def solution(s):
    arrLower = []
    arrUpper = []
    
    answer = ''
    
    s = list(s)
    
    for word in s:
        if word.islower():
            arrLower.append(word)
        else:
            arrUpper.append(word)
        
    arrLower.sort()
    arrLower.reverse()
    arrUpper.sort()
    arrUpper.reverse()
    
    answer += ''.join(arrLower) + ''.join(arrUpper)
    
    
    
    
    return answer