def solution(s, n):
    # 대문자는 65 ~ 90
    # 소문자는 97 ~ 122
    answer = ''
    
    for word in list(s):
        # 공백 예외처리
        if word == ' ':
            answer += ' '
        else:
            # 대문자일때,
            if word.isupper():
                answer += chr((ord(word) - ord('A') + n) % 26 + ord('A'))
            # 소문자일때,
            else:
                answer += chr((ord(word) - ord('a') + n) % 26 + ord('a'))
        
            
    return answer