def solution(today, terms, privacies):
    answer = []
    
    termsInfo = {}
    for term in terms:
        term = term.split(' ')
        termsInfo[term[0]] = int(term[1])
    
    today = today.split('.')
    preY = int(today[0])
    preM = int(today[1])
    preD = int(today[2])
    
    for i, x in enumerate(privacies):
        x = x.split(' ')
        ymd = x[0].split('.')
        year = int(ymd[0])
        mon = int(ymd[1])
        day = int(ymd[2])
        # period : 기간 이라는 뜻
        period = termsInfo.get(x[1]) * 28

        cnt = 0
        while True:
            day += 1
            cnt += 1
            if day > 28:
                day = 1
                mon += 1
                if mon > 12:
                    mon = 1
                    year += 1

            if preY == year and preM == mon and preD == day:
                    if cnt >= period:
                        answer.append(i + 1)
                    break
    
        
        
    return answer