import sys
from collections import deque

T = int(sys.stdin.readline().strip())

def bfs(i, j, k, l):
  queue = deque()
  visited[i][j] = True
  # 좌상, 상좌, 상우, 우상, 우하, 하우, 하좌, 좌하
  dx = [-1, -2, -2, -1, 1, 2, 2, 1]
  dy = [-2, -1, 1, 2, 2, 1, -1, -2]

  queue.append([i, j])
  # print(queue)
  cnt = 0
  while queue:
    pop = queue.popleft()
    for d in range(8):
      nx = pop[0] + dx[d]
      ny = pop[1] + dy[d]
      if 0 <= nx < I and 0 <= ny < I and visited[nx][ny] == -1:
        # print(nx,ny)
        # print('방문',nx, ny, d)
        cnt += 1
        visited[nx][ny] = visited[pop[0]][pop[1]] + 1
        queue.append([nx, ny])
        if nx == k and ny == l:
          return visited[nx][ny]
        
  return 0




for _ in range(T):
  I = int(sys.stdin.readline().strip())
  now = list(map(int, sys.stdin.readline().strip().split(' ')))
  want = list(map(int, sys.stdin.readline().strip().split(' ')))
  visited = [[-1 for _ in range(I)] for _ in range(I)]
  
  find = bfs(now[0], now[1], want[0], want[1])
  if find == 0:
    print('0')
  else:
    print(find - 1)
    
