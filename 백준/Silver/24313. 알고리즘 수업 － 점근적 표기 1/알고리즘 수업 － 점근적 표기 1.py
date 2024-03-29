import sys

a1, a0 = map(int,sys.stdin.readline().strip().split(' ')) # N, M 선언
C = int(sys.stdin.readline().strip())
n0 = int(sys.stdin.readline().strip())

def F(n):

  return a1 * n + a0

def G(n):

  return n

if F(n0) <= G(n0) * C and a1 <= C:
  print(1)
else:
  print(0)



