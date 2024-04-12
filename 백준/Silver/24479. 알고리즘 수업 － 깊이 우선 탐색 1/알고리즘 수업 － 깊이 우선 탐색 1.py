import sys
sys.setrecursionlimit(10 ** 6)

N, M, R = map(int, sys.stdin.readline().strip().split(' '))

result = [0] * (N + 1)
cnt = 0
visited = [False] * (N + 1)
graph = [[] for _ in range(N + 1)]
for i in range(M):
  a, b = map(int, sys.stdin.readline().strip().split(' '))
  graph[a].append(b)
  graph[b].append(a)


def dfs(node):
  global cnt
  if visited[node] == True:
    return
  visited[node] = True
  graph[node].sort()
  cnt += 1
  result[node] = cnt

  for i in graph[node]:
    if visited[i] == False:
      dfs(i)
  
dfs(R)
for v in result[1:]:
  print(v)