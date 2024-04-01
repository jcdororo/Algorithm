import sys

N, M = map(int, sys.stdin.readline().strip().split(' '))
board = [list(sys.stdin.readline().strip()) for _ in range(N)]

chess=[['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
       ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
       ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
       ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
       ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
       ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
       ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
       ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W']]

startIndex =[]

for i in range(N - 7):
  for j in range(M - 7):
    startIndex.append([i, j])

answer = 1e9

def cal(x, y):
  cnt = 0

  for i in range(8):
    for j in range(8):
      if chess[i][j] == board[i+x][j+y]:
        cnt += 1

  return min(cnt, 64-cnt)

for x, y in startIndex:
  answer = min(answer, cal(x,y))
  

print(answer)

