import sys

N = int(sys.stdin.readline().strip())

def MenOfPasstion(n):
  sum = 0
  for i in range(1, n):
    sum += i

  return sum


print(MenOfPasstion(N))

print(2)