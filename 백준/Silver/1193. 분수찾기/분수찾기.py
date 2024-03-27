import sys


X = int(sys.stdin.readline().strip())

line = 1

while X > line:
  X -= line
  line += 1

if line % 2:
  print(f'{line - X + 1}/{X}')
else:
  print(f'{X}/{line - X + 1}')