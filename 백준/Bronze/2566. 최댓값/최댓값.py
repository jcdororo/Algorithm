import sys

square = [list(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(9)]

numMax = 0
numIndex = ''
for i in range(9):
  for j in range(9):
    numMax = square[i][j] if square[i][j] >= numMax else numMax
    numIndex = str(i + 1) + ' ' + str(j + 1) if square[i][j] >= numMax else numIndex

print(numMax)
print(numIndex)