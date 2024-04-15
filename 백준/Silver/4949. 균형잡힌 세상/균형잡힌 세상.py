"""

"""
import sys


answer = ''

while True:
  word = sys.stdin.readline().rstrip()
  if word == '.' and len(word) == 1:
    break
  word = word.strip()

  stack = []
  result = 'yes'
  for s in word:

    if s == '(':
      stack.append('(')
    elif s == ')':
      if stack and stack[-1] == '(':
        stack.pop()
      elif len(stack) == 0 or stack[-1] != '(':
        result = 'no'
        break

    elif s == '[':
      stack.append('[')
    elif s == ']':
      if stack and stack[-1] == '[':
        stack.pop()
      elif len(stack) == 0 or stack[-1] != '[':
        result = 'no'
        break
  
  if len(stack) == 0 and result == 'yes':
    print('yes')
  else:
    print('no')
  
  
