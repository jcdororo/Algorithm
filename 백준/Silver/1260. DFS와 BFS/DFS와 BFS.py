"""

"""
import sys
from collections import deque


N, M, V = map(int, sys.stdin.readline().strip().split(' '))

graph = [[] for _ in range(N + 1)]

for i in range(M):
  a, b = map(int, sys.stdin.readline().strip().split(' '))
  graph[a].append(b)
  graph[b].append(a)

for i in range(len(graph)):
  graph[i].sort()

def dfs(node):
  answer.append(node)
  if visited[node]:
    return
  visited[node] = True

  for i in graph[node]:
    if visited[i] == False:
      dfs(i)


def bfs(node):
  queue = []

  queue.append(node)
  visited[node] = True

  while queue:
    pop = queue.pop(0)
    answer.append(pop)

    for i in graph[pop]:
      if visited[i] == False:
        visited[i] = True
        queue.append(i)

# print(graph)

visited = [False] * (N + 1)
answer = []
dfs(V)
print(*answer)

answer = []
visited = [False] * (N + 1)
bfs(V)
print(*answer)