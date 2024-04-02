import sys

table = [[0 for _ in range(21)]]

winner = '0'
winIndex = ''

# print(table)
for i in range(19):
  temp = [0] + list(map(int, sys.stdin.readline().strip().split(' '))) + [0]
  table.append(temp)

table.append([0 for _ in range(21)])

# 가로
def case1B(i, j):
  # 5개
  temp1 = table[i][j] == 1 and table[i][j+1] == 1 and table[i][j+2] == 1 and table[i][j+3] == 1 and table[i][j+4] == 1
  # 뒤에 하나
  temp2 = table[i][j] == 1 and table[i][j+1] == 1 and table[i][j+2] == 1 and table[i][j+3] == 1 and table[i][j+4] == 1 and table[i][j+5] == 1
  # 앞에 하나
  temp3 = table[i][j-1] == 1 and table[i][j] == 1 and table[i][j+1] == 1 and table[i][j+2] == 1 and table[i][j+3] == 1 and table[i][j+4] == 1
  return temp1 and (not temp2) and (not temp3)

def case1W(i, j):
  # 5개
  temp1 = table[i][j] == 2 and table[i][j+1] == 2 and table[i][j+2] == 2 and table[i][j+3] == 2 and table[i][j+4] == 2
  # 뒤에 하나
  temp2 = table[i][j] == 2 and table[i][j+1] == 2 and table[i][j+2] == 2 and table[i][j+3] == 2 and table[i][j+4] == 2 and table[i][j+5] == 2
  # 앞에 하나
  temp3 = table[i][j-1] == 2 and table[i][j] == 2 and table[i][j+1] == 2 and table[i][j+2] == 2 and table[i][j+3] == 2 and table[i][j+4] == 2
  return temp1 and (not temp2) and (not temp3)

#세로
def case2B(i, j):
  # 5개
  temp1 = table[i][j] == 1 and table[i+1][j] == 1 and table[i+2][j] == 1 and table[i+3][j] == 1 and table[i+4][j] == 1
  # 뒤에 하나
  temp2 = table[i][j] == 1 and table[i+1][j] == 1 and table[i+2][j] == 1 and table[i+3][j] == 1 and table[i+4][j] == 1 and table[i+5][j] == 1
  # 앞에 하나
  temp3 = table[i-1][j] == 1 and table[i][j] == 1 and table[i+1][j] == 1 and table[i+2][j] == 1 and table[i+3][j] == 1 and table[i+4][j] == 1
  return temp1 and (not temp2) and (not temp3)

def case2W(i, j):
  # 5개
  temp1 = table[i][j] == 2 and table[i+1][j] == 2 and table[i+2][j] == 2 and table[i+3][j] == 2 and table[i+4][j] == 2
  # 뒤에 하나
  temp2 = table[i][j] == 2 and table[i+1][j] == 2 and table[i+2][j] == 2 and table[i+3][j] == 2 and table[i+4][j] == 2 and table[i+5][j] == 2
  # 앞에 하나
  temp3 = table[i-1][j] == 2 and table[i][j] == 2 and table[i+1][j] == 2 and table[i+2][j] == 2 and table[i+3][j] == 2 and table[i+4][j] == 2
  return temp1 and (not temp2) and (not temp3)

# 좌위에서 우하
def case3B(i, j):
  # 5개
  temp1 = table[i][j] == 1 and table[i+1][j+1] == 1 and table[i+2][j+2] == 1 and table[i+3][j+3] == 1 and table[i+4][j+4] == 1
  # 뒤에 하나
  temp2 = table[i][j] == 1 and table[i+1][j+1] == 1 and table[i+2][j+2] == 1 and table[i+3][j+3] == 1 and table[i+4][j+4] == 1 and table[i+5][j+5] == 1
  # 앞에 하나
  temp3 = table[i-1][j-1] == 1 and table[i][j] == 1 and table[i+1][j+1] == 1 and table[i+2][j+2] == 1 and table[i+3][j+3] == 1 and table[i+4][j+4] == 1
  return temp1 and (not temp2) and (not temp3)

def case3W(i, j):
  # 5개
  temp1 = table[i][j] == 2 and table[i+1][j+1] == 2 and table[i+2][j+2] == 2 and table[i+3][j+3] == 2 and table[i+4][j+4] == 2
  # 뒤에 하나
  temp2 = table[i][j] == 2 and table[i+1][j+1] == 2 and table[i+2][j+2] == 2 and table[i+3][j+3] == 2 and table[i+4][j+4] == 2 and table[i+5][j+5] == 2
  # 앞에 하나
  temp3 = table[i-1][j-1] == 2 and table[i][j] == 2 and table[i+1][j+1] == 2 and table[i+2][j+2] == 2 and table[i+3][j+3] == 2 and table[i+4][j+4] == 2
  return temp1 and (not temp2) and (not temp3)

# 좌하에서 우상
def case4B(i, j):
  # 5개
  temp1 = table[i][j] == 1 and table[i-1][j+1] == 1 and table[i-2][j+2] == 1 and table[i-3][j+3] == 1 and table[i-4][j+4] == 1
  # 뒤에 하나
  temp2 = table[i][j] == 1 and table[i-1][j+1] == 1 and table[i-2][j+2] == 1 and table[i-3][j+3] == 1 and table[i-4][j+4] == 1 and table[i-5][j+5] == 1
  # 앞에 하나
  temp3 = table[i+1][j-1] == 1 and table[i][j] == 1 and table[i-1][j+1] == 1 and table[i-2][j+2] == 1 and table[i-3][j+3] == 1 and table[i-4][j+4] == 1
  return temp1 and (not temp2) and (not temp3)

def case4W(i, j):
  # 5개
  temp1 = table[i][j] == 2 and table[i-1][j+1] == 2 and table[i-2][j+2] == 2 and table[i-3][j+3] == 2 and table[i-4][j+4] == 2
  # 뒤에 하나
  temp2 = table[i][j] == 2 and table[i-1][j+1] == 2 and table[i-2][j+2] == 2 and table[i-3][j+3] == 2 and table[i-4][j+4] == 2 and table[i-5][j+5] == 2
  # 앞에 하나
  temp3 = table[i+1][j-1] == 2 and table[i][j] == 2 and table[i-1][j+1] == 2 and table[i-2][j+2] == 2 and table[i-3][j+3] == 2 and table[i-4][j+4] == 2
  return temp1 and (not temp2) and (not temp3)


for i in range(1,20):
  for j in range(1,20):
    if case1B(i, j):
      winner = '1'
      winIndex = str(i) + ' ' + str(j)
      
    if case1W(i, j):
      winner = '2'
      winIndex = str(i) + ' ' + str(j)

    if case2B(i, j):
      winner = '1'
      winIndex = str(i) + ' ' + str(j)

    if case2W(i, j):
      winner = '2'
      winIndex = str(i) + ' ' + str(j)

    if case3B(i, j):
      winner = '1'
      winIndex = str(i) + ' ' + str(j)

    if case3W(i, j):
      winner = '2'
      winIndex = str(i) + ' ' + str(j)

    if case4B(i, j):
      winner = '1'
      winIndex = str(i) + ' ' + str(j)

    if case4W(i, j):
      winner = '2'
      winIndex = str(i) + ' ' + str(j)


print(winner)
if winner != '0':
  print(winIndex)