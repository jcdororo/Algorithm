"""

"""
import sys
from collections import deque



T = int(sys.stdin.readline().strip())

def bfs(i, j, table):
  queue = deque()
  newTable = table
  newTable[i][j] = 0

  queue.append([i,j])

  dx = [-1,0,1,0] # 상 우 하 좌
  dy = [0,1,0,-1]

  while queue:
    pop = queue.popleft()

    for d in range(4):
      nx = pop[0] + dx[d]
      ny = pop[1] + dy[d]

      if 0 <= nx < M and 0 <= ny < N and newTable[nx][ny] == 1:
        queue.append([nx,ny])
        newTable[nx][ny] = 0


  return newTable
  


for _ in range(T):
  M, N, K = map(int, sys.stdin.readline().strip().split(' '))
  table = [([0] * N) for x in range(M)]

  for i in range(K):
    x, y = map(int, sys.stdin.readline().strip().split(' '))
    table[x][y] = 1

  # for t in table:
  #   print(t)

  cnt = 0
  for i in range(M):
    for j in range(N):
      if table[i][j] == 1:
        table = bfs(i,j, table)
        cnt += 1

  print(cnt)





