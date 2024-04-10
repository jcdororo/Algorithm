import sys


T = int(sys.stdin.readline().strip())

for _ in range(T):
  word = list(sys.stdin.readline().strip())
  stack = []
  answer = 'YES'


  for s in word:
    if s == '(':
      stack.append('(')
    elif s == ')':
      if stack and stack[-1] == '(':
        stack.pop()
      elif len(stack) == 0:
        answer = 'NO'
        break
      
  if len(stack) > 0:
    answer = 'NO'
  print(answer)

      


  # break
