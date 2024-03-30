import sys

N = int(sys.stdin.readline().strip())
lenS = int(sys.stdin.readline().strip())
S = sys.stdin.readline().strip()

IOI = 'IOI'

result = 0

if N >= 2:
  for _ in range(1,N):
    IOI += 'OI'

for i in range(lenS):
  if S[i:i+len(IOI)] == IOI:
    result += 1

print(result)