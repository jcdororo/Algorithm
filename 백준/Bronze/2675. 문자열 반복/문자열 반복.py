T = input()

result = ''

for _ in range(int(T)):
  R, S = input().split(' ')
  temp = ''
  for word in S:
    temp += word * int(R)
  
  result += temp + '\n'

print(result)