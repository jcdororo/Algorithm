import sys

words = sys.stdin.readline().split('-')

answer = ''

for word in words:
  answer += word[0]

print(answer)