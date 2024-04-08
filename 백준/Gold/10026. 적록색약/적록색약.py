import sys
from collections import deque


N = int(sys.stdin.readline().strip())

grid = [list(sys.stdin.readline().strip()) for _ in range(N)]
visited = [[False] * N for _ in range(N)]

# 적록색약이 아닌사람이 봤을때
def bfs(i, j):
  queue = deque()
  visited[i][j] = True

  dx = [-1, 1, 0, 0]  # 상 하 좌 우
  dy = [0, 0, -1, 1]
  queue.append([i, j])
  while queue:
    x, y = queue.popleft()
    for d in range(4):
      nx = x + dx[d]
      ny = y + dy[d]
      if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] == False and (grid[x][y] == grid[nx][ny]):
        queue.append([nx, ny])
        visited[nx][ny] = True

cnt1 = 0
# 적록색약이 아닌사람이 봤을때
for i in range(N):
  for j in range(N):
    if visited[i][j] == False:
      bfs(i, j)
      cnt1 += 1

# 적록색약인 사람이 봤을때
for i in range(N):
  for j in range(N):
    if grid[i][j] == 'G':
      grid[i][j] = 'R'

visited = [[False] * N for _ in range(N)]

cnt2 = 0

for i in range(N):
  for j in range(N):
    if visited[i][j] == False:
      bfs(i, j)
      cnt2 += 1

print(f'{cnt1} {cnt2}')