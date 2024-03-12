def solution(n, m):
    answer = []
    # 최대 공약수 구하기
    # 최대공약수 구하는 함수
    def gcd(a, b):
        while b != 0:
            a, b = b, a % b
        return a
    
    answer.append(gcd(n, m))
    answer.append(n * m / gcd(n, m))
    # 최소 공배수 구하기 (최소공배수는 두 수의 곱 / 최대 공약수)
    return answer