import sys

N = int(sys.stdin.readline().strip())
myCards = sys.stdin.readline().strip().split(' ')
M = int(sys.stdin.readline().strip())
findCards = sys.stdin.readline().strip().split(' ')

dic = {}

for card in myCards:
  if card in dic:
    dic[card] += 1
  else:
    dic[card] = 1

answer = []

for findCard in findCards:
  if findCard in dic:
    answer.append(str(dic[findCard]))
  else:
    answer.append('0')

print(" ".join(answer))