import sys
from heapq import *


N = int(sys.stdin.readline().strip())

arr = [list(sys.stdin.readline().strip()) for x in range(N)]
visited = [[False] * N for _ in range(N)]

allCnt = 0
cnt = 0
answer = []
def dfs(i, j):
  global cnt
  cnt += 1
  # print(i, j, 'depth', cnt)
  dx = [-1, 1, 0, 0] # 상하좌우
  dy = [0, 0, -1, 1]

  visited[i][j] = True
  arr[i][j] = '0'

  for d in range(4):
    nx = i + dx[d]
    ny = j + dy[d]

    if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] == False and arr[nx][ny] == '1':
      dfs(nx, ny)
        

for i in range(N):
  for j in range(N):
    if visited[i][j] == False and arr[i][j] != '0':
      dfs(i, j)
      answer.append(cnt)
      cnt = 0
      allCnt += 1

answer.sort()
print(allCnt)
for v in answer:
  print(v)