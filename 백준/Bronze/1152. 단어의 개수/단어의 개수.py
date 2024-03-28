import sys

words = sys.stdin.readline().strip()

def wordCounter(words):
  if words == '':
    return 0
  
  arrWord = words.split(' ')

  return len(arrWord)

answer = wordCounter(words)

print(answer)