import sys

N = int(sys.stdin.readline().strip())

for _ in range(N):
  word = sys.stdin.readline().strip()
  stack = []
  answer = 'YES'
  for w in word:
    if w == '(':
      stack.append('(')
    elif w== ')':
      if '(' in stack:
        stack.pop()
      else:
        answer = 'NO'
        break

  if len(stack) > 0:
    answer = 'NO'
  print(answer)
  
  
