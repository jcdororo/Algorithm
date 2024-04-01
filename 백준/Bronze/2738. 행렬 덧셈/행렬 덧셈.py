import sys

N, M = map(int, sys.stdin.readline().strip().split(' '))

arrIn = []
result = ''

for _ in range(N*2):
  arrIn.append(sys.stdin.readline().strip())


for i in range(N):
  a = list(map(int, arrIn[i].split(' ')))
  b = list(map(int, arrIn[i+N].split(' ')))

  for j in range(M):
    result += str(a[j]+b[j]) + ' '

  result += '\n'

print(result)
  