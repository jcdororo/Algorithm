"""

"""
import sys
sys.setrecursionlimit(10**6)
cnt = 0
def dfs(node):
  global cnt
  cnt += 1
  result[node] = cnt
  visited[node] = True
  grid[node].sort(reverse=True)
  for i in grid[node]:
    if visited[i] == False:
      dfs(i)

N, M, R = map(int, sys.stdin.readline().strip().split(' '))
visited = [False] * (N + 1)
grid = [[] for _ in range(N + 1)]
result = [0] * (N + 1)
for _ in range(M):
  a, b = map(int, sys.stdin.readline().strip().split(' '))
  grid[a].append(b)
  grid[b].append(a)

dfs(R)

for v in result[1:]:
  print(v)



