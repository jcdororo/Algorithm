import sys

N = int(sys.stdin.readline().strip())
arr = list(map(int, (sys.stdin.readline().strip().split(' '))))

arr.sort()
answer = 0
total = 0

for a in arr:
  total += a
  answer += total

print(answer)