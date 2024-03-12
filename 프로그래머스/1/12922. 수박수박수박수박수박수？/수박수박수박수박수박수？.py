def solution(n):
    answer = ''
    for x in range(n):
        if x % 2 == 0:
            answer += '수'
        else:
            answer += '박'
    return answer