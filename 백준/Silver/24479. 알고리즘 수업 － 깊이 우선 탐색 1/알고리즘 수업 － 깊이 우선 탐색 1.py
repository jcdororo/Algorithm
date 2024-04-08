import sys
from sys import setrecursionlimit
setrecursionlimit(10 ** 6)


N, M, R= map(int, sys.stdin.readline().strip().split(' '))

graph = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)
race = [0 for _ in range(N + 1)]
cnt = 1

for i in range(M):
  u, v = map(int, sys.stdin.readline().strip().split(' '))
  graph[u].append(v)
  graph[v].append(u)


def dfs(node):
  global cnt
  visited[node] = True
  graph[node].sort()
  race[node] = cnt
  
  cnt += 1
  for i in graph[node]:
    if not visited[i]:
      dfs(i)
      

dfs(R)

# print(race)
for i in range(1, len(race)):
  print(race[i])


