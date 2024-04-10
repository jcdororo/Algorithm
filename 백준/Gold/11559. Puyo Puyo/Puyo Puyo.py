import sys


N = 12
M = 6
puyos = [list(sys.stdin.readline().strip()) for _ in range(N)][::-1]


# for puyo in puyos:
#   print(puyo)
# print()


# 내리기
def setPuyos(puyos):
  newPuyos = puyos[:]

  for k in range(6):
    boolPass = False
    for l in range(12):
      if newPuyos[l][k] != '.':
        boolPass = True
        break
    
    if boolPass:
      # while newPuyos[0][k] == '.':
      for _ in range(11):
        for a in range(11):
          if newPuyos[a][k] == '.':
            newPuyos[a][k] = newPuyos[a+1][k]
            newPuyos[a+1][k] = '.'


          


  return newPuyos
# 없애기
def dfs(i, j, color, visited, arounds):
  visited[i][j] = True
  tempArd = arounds
  tempArd.append([i,j])
  dx = [-1, 0, 1, 0] # 상 우 하 좌
  dy = [0, 1, 0, -1]

  for d in range(4):
    nx = i + dx[d]
    ny = j + dy[d]

    if 0 <= nx < N and 0 <= ny < M and puyos[nx][ny] == color and visited[nx][ny] == False:
      dfs(nx, ny, color, visited, tempArd)

result = 0

while True:
  cnt = 0
  for i in range(12):
    for j in range(6):
      if puyos[i][j] != '.':
        visited = [[False] * M for _ in range(12)]
        arounds = []
        dfs(i, j, puyos[i][j], visited, arounds)
        # print('ard',arounds)
        if len(arounds) >= 4:
          # print('없애버리기')
          for x, y in arounds:
            puyos[x][y] = '.'
          # for puyo in puyos:
          #   print(puyo)
          cnt += 1
          i = 0
          j = 0

  if cnt == 0:
    break
  else:
    result += 1
  # print('정리하기')
  puyos = setPuyos(puyos)
  # for puyo in puyos:
  #   print(puyo)

print(result)



        