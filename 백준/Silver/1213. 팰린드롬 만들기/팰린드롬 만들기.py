import sys

word = list(sys.stdin.readline().strip())
dic = {}
palWord = ''

def isPalindrome(palWord):

  if palWord == palWord[::-1]:
    return palWord

  return 'I\'m Sorry Hansoo'


for x in word:
  if dic.get(x,False):
    dic[x] += 1
  else:
    dic[x] = 1

for key, value in sorted(dic.items(),reverse=True):
  value = int(value)

  if value % 2 == 1:
    palWord += key
    dic[key] -= 1


for key, value in sorted(dic.items(),reverse=True):

  for i in range(int(value)):
    if i % 2 == 0:
      palWord = key + palWord
    else:
      palWord = palWord + key

print(isPalindrome(palWord))
