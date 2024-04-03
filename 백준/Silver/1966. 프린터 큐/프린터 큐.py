import sys
from collections import deque

T = int(sys.stdin.readline().strip())
for i in range(T):
  N, M = list(map(int, sys.stdin.readline().strip().split(' ')))
  S = list(map(int, sys.stdin.readline().strip().split(' ')))

  paper = deque()

  for i in range(1, N + 1):
    paper.append([i, S[i-1]])

  
  numM = M + 1

  cnt = 0
  while paper:
    for i in range(len(paper)):
      first = paper[0][1]
      boolPass = True
      for j in range(len(paper)):
        if first < paper[j][1]:
          paper.append(paper.popleft())
          boolPass = False
          break
      if boolPass:
        temp = paper.popleft()
        cnt += 1
        if temp[0] == numM:
          print(cnt)

  
  

  
