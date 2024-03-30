import sys

N = int(sys.stdin.readline().strip())

arrN = []
arrM = []
beforeWord = ''
afterWord = ''
answer = ''

for i in range(N):
  word = sys.stdin.readline().strip()
  arrN.append(word)

M = int(sys.stdin.readline().strip())

for i in range(M):
  word = sys.stdin.readline().strip()
  arrM.append(word)

for i in range(len(arrN)):
  if N == 1 and M == 1:
    break
  if arrN[i] == '?':
    if i == 0:
      # 맨 처음에 ?일때
      beforeWord = ''
      afterWord = arrN[i+1]
      break
    
    if i == len(arrN) - 1:
      # 맨 마지막에 ? 일때
      beforeWord = arrN[i-1]
      afterWord = ''
      break 

    if 0 < i and i < len(arrN) - 1:
      # 가운데에 ? 일때
      beforeWord = arrN[i-1]
      afterWord = arrN[i+1]
      break

for S in arrM:
  # 맨 처음에 ?일때
  if beforeWord == '' and afterWord != '' and S[-1] == afterWord[0] and S not in arrN:
    answer = S
    break
  # 맨 마지막에 ? 일때
  if beforeWord != '' and afterWord == '' and beforeWord[-1] == S[0] and S not in arrN:
    answer = S
    break
  # 가운데에 ? 일때
  if beforeWord != '' and afterWord != '' and beforeWord[-1] == S[0] and S[-1] == afterWord[0] and S not in arrN:
    answer = S
    break


if N == 1 and M == 1:
  print(arrM[0])
else:
  print(answer)
  
