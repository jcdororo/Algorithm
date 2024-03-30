import sys

N, M = map(int, sys.stdin.readline().strip().split(' '))

noListen = set()
noSee = set()
noListenAndNoSee = set()

for _ in range(N):
  name = sys.stdin.readline().strip()
  noListen.add(name)

for _ in range(M):
  name = sys.stdin.readline().strip()
  noSee.add(name)


for name in noListen:
  if name in noSee:
    noListenAndNoSee.add(name)

print(len(noListenAndNoSee))
print('\n'.join(sorted(noListenAndNoSee)))