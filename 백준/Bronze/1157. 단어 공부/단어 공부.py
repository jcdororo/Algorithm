import sys

word = sys.stdin.readline().strip().upper()
maxAlpha = ''
maxCount = 0
alphabet = {}

def isDuplication(alpha, count):
  cnt = 0
  for y in alphabet.values():
    if count == y:
      cnt += 1
    
    if cnt >= 2:
      return '?'
    
  return alpha


for x in word:
  if alphabet.get(x, False):
    alphabet[x] += 1
  else:
    alphabet[x] = 1

for alpha, count in alphabet.items():
  if count >= maxCount:
    maxAlpha = alpha
    maxCount = count

print(isDuplication(maxAlpha, maxCount))

