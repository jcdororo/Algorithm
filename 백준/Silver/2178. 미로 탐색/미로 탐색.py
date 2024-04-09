import sys
from collections import deque

N, M = map(int, sys.stdin.readline().strip().split(' '))
arr = [list(sys.stdin.readline().strip()) for _ in range(N)]
visited = [[0] * M for _ in range(N)]


def bfs(i, j):
  queue = deque()
  visited[i][j] = 1
  
  dx = [-1, 0, 1, 0]# 상 우 하 좌
  dy = [0, 1, 0, -1]

  queue.append([i, j])
  while queue:
    pop = queue.popleft()
    if pop[0] == N - 1 and pop[1] == M - 1:
      return visited[N - 1][M - 1]
    for d in range(4):
      nx = pop[0] + dx[d]
      ny = pop[1] + dy[d]
      if 0 <= nx < N and 0 <= ny < M and visited[nx][ny] == 0 and arr[nx][ny] == '1':
        visited[nx][ny] = visited[pop[0]][pop[1]] + 1
        queue.append([nx, ny])


print(bfs(0, 0))

