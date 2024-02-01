import sys
#sys.stdin = open('input.txt')
t = int(sys.stdin.readline())

for i in range(t):
  a,b = map(int, sys.stdin.readline().split(' '))
  print(f'Case #{i+1}: {a+b}')
