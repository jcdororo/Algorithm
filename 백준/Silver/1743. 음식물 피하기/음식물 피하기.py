import sys
from collections import deque

N, M, K = map(int, sys.stdin.readline().strip().split(' '))
arr = [[0] * M for _ in range(N)]
visited = [[False] * M for _ in range(N)]
answer = 0
for i in range(K):
  x, y = map(int, sys.stdin.readline().strip().split(' '))
  arr[x-1][y-1] = 1



def bfs(i, j):
  queue = deque()
  visited[i][j] = True
  arr[i][j] = 0
  queue.append([i, j])

  dx = [-1, 0, 1, 0] # 상 우 하 좌
  dy = [0, 1, 0, -1]
  cnt = 1

  while queue:
    pop = queue.popleft()
    
    for d in range(4):
      nx = pop[0] + dx[d]
      ny = pop[1] + dy[d]

      if 0 <= nx < N and 0 <= ny < M and visited[nx][ny] == False and arr[nx][ny] == 1:
        visited[nx][ny] = True
        arr[nx][ny] = 0
        queue.append([nx, ny])
        cnt += 1

  return cnt


for i in range(N):
  for j in range(M):
    if arr[i][j] == 1 and visited[i][j] == False:
      answer = max(answer, bfs(i, j))

print(answer)