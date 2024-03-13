def solution(s):
    
    split = s.split(' ')
    
    for i, word in enumerate(split):
        word = word.lower()
        word = list(word)
        temp = ''
        for index, a in enumerate(word):
            if index % 2 == 0:
                a = a.upper()
            
            temp += a
                
        split[i] = temp

        
    return ' '.join(split)