import sys
from collections import deque


N = int(sys.stdin.readline().strip())

stack = deque()
for _ in range(N):
  word = sys.stdin.readline().strip().split(' ')
#   print(word)

  if word[0] == 'push':
    stack.append(int(word[1]))

  if word[0] == 'pop':
    if stack:
      print(stack.pop())
    else:
      print(-1)

  if word[0] == 'size':
    print(len(stack))

  if word[0] == 'empty':
    if stack:
      print(0)
    else:
      print(1)

  if word[0] == 'top':
    if stack:
      print(stack[-1])
    else:
      print(-1)
      


