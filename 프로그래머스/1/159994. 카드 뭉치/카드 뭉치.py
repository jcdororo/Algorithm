def solution(cards1, cards2, goal):
    answer = ''
    index1 = 0
    index2 = 0
    
    for word in goal:
        if len(cards1) > index1 and cards1[index1] == word:
            index1 += 1
        elif len(cards2) > index2 and cards2[index2] == word:
            index2 += 1
        else:
            return "No"
    
    return "Yes"