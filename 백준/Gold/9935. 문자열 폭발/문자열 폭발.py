import sys

word = sys.stdin.readline().strip()
bomb = sys.stdin.readline().strip()

switch = 0
stack = []

start = bomb[0]
end = bomb[-1]

for s in word:
  stack.append(s)
  if s == start:
    switch = 1

  if s == end and len(stack) >= len(bomb):
    switch = 0
    temp = ''

    for _ in range(len(bomb)):
      temp = stack.pop() + temp
    
    if temp == bomb:
      continue
    else:
      for t in temp:
        stack.append(t)    

if len(stack) == 0:
  print('FRULA')
else:
  print(''.join(stack))