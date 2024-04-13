"""
"""
import sys
from collections import deque


def bfs(N, grid, start, K):
  visited = [-1 for _ in range(N + 1)]
  visited[start] = 0
  # print(visited)
  queue = deque()
  queue.append(start)

  while queue:
    pop = queue.popleft()

    for v in grid[pop]:
      if visited[v] == -1:
        visited[v] = visited[pop] + 1
        queue.append(v)

  # print(visited)

  result = [i for i in range(1, N + 1) if visited[i] == K]
  # print(result)
  if result:
    result.sort()
    for v in result:
      print(v)
  else:
    print(-1)



def solve(N, M, K, X, cities):
  grid = [[] for _ in range(N + 1)]
  
  for city in cities:
    a, b = city
    grid[a].append(b)
  # print(grid)

  bfs(N, grid, X, K)


N, M, K, X = map(int ,sys.stdin.readline().split(' '))

cities = [tuple(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(M)]
# print(cities)
solve(N, M, K, X, cities)

