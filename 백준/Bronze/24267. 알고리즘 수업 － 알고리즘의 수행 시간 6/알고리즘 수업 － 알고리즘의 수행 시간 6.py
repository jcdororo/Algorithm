import sys

N = int(sys.stdin.readline().strip())

def MenOfPasstion(n):                 # 최적화 후 코드
  sum = 0
  for i in range(1, n):
    sum += i * (n - 1 - i)


  return sum



print(MenOfPasstion(N))

print(3)