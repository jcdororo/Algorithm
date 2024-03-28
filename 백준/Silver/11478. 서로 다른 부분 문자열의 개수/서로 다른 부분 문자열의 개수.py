import sys

S = sys.stdin.readline().strip()

result = set()

for i in range(len(S)):

  for j in range(1,len(S) + 1):
    result.add(S[i:i+j])

print(len(result))