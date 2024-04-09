

import sys
sys.setrecursionlimit(10 ** 6)


      
N = int(sys.stdin.readline().strip())
answer = 0
maxHeight = 0
arr = []
for i in range(N):
  temp = list(map(int, sys.stdin.readline().strip().split(' ')))
  arr.append(temp)
  maxHeight = max(maxHeight,max(temp))


def dfs(i, j, tempArr, visited, depth):
  
  dx = [-1, 0, 1, 0] # 상우하좌
  dy = [0, 1, 0, -1]

  for d in range(4):
    nx = i + dx[d]
    ny = j + dy[d]
    if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] == False and tempArr[nx][ny] != 0:
      visited[nx][ny] = True
      tempArr[nx][ny] = 0
      dfs(nx, ny, tempArr, visited, depth + 1)
      


for height in range(0, maxHeight):
  tempArr = [[y for y in x] for x in arr]
  for i in range(N):
    for j in range(N):
      if tempArr[i][j] <= height:
        tempArr[i][j] = 0
  visited = [[False] * N for _ in range(N)]
  cnt = 0
  for i in range(N):
    for j in range(N):
      if visited[i][j] == False and tempArr[i][j] != 0:
        visited[i][j] = True
        tempArr[i][j] = 0
        dfs(i, j, tempArr, visited, 0)
        cnt += 1

  answer = max(answer, cnt)



print(answer)