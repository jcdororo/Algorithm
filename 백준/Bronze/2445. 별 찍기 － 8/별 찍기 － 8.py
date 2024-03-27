N = int(input())

answer = '*' * N * 2

for num in range(N - 1, 0, -1):
  star = '*' * num
  blank = ' ' * (N - num) * 2
  
  answer = star + blank + star + '\n' + answer + '\n'
  answer += star + blank + star

print(answer)