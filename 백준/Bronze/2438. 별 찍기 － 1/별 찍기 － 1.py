a = input()

result = ''
star = '*'
for _ in range(int(a)):
  result += star + '\n'
  star += '*'

print(result)