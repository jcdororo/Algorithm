import sys


n = int(sys.stdin.readline().strip())

stack = []
ans = 0

for i in range(n):
  x, y = map(int, sys.stdin.readline().strip().split(' '))

  while stack and stack[-1] > y:
    stack.pop()
  
  if stack and stack[-1] == y:
    continue
  if y > 0:
    stack.append(y)
    ans += 1

print(ans)
