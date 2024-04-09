import sys


N = list(sys.stdin.readline().strip())

N.sort(reverse=True)

if int(''.join(N)) % 30 == 0:
  print(''.join(N))
else:
  print(-1)

