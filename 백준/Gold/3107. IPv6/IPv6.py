import sys


words = sys.stdin.readline().strip()

colone = '::'

if colone in words:
  reWord = ':0:'
  while True:
    temp = words.replace(colone,reWord)
    if len(temp.split(':')) >= 8:
      if len(temp.split(':')) >= 9:
        temp = temp.replace('0:','')
      words = temp
      break
    else:
      reWord += '0:'





words = words.split(':')
for i in range(len(words)):
  words[i] = ('0' * (4-len(words[i]))) + words[i]

print(':'.join(words))

