import sys

N = int(sys.stdin.readline().strip())        

answer = ''
company = set()

for _ in range(N):
  name, commute = sys.stdin.readline().strip().split(' ')

  if commute == 'enter':
    company.add(name)
  else:
    company.remove(name)


company = list(company)
company.sort(reverse=True)

for name in company:
  answer += name + '\n'

print(answer)
