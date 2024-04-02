import sys

N = int(sys.stdin.readline().strip())

switch = list(map(int, sys.stdin.readline().strip().split(' ')))

P = int(sys.stdin.readline().strip())

students = []

for i in range(P):
  students.append(list(map(int, sys.stdin.readline().strip().split(' '))))


def boy(click):

  for i in range(len(switch)):
    if (i + 1) % click == 0:
      switch[i] = 1 if switch[i] == 0 else 0

  return 0

def girl(click) :
  # 맨 왼쪽
  if click - 1 == 0:    
    switch[click - 1] = 1 if switch[click - 1] == 0 else 0
    return 0
  # 맨 오른쪽
  if click == len(switch):
    switch[click - 1] = 1 if switch[click - 1] == 0 else 0
    return 0

  # 가운데
  if click - 1 > 0 and click < len(switch):
    middle = click - 1
    switch[middle] = 1 if switch[middle] == 0 else 0
    left = middle - 1
    right = middle + 1
    
    while True:

      if left < 0 or right >= len(switch):
        break

      if switch[left] == switch[right]:
        switch[left] = 1 if switch[left] == 0 else 0
        switch[right] = 1 if switch[right] == 0 else 0
        left -= 1
        right += 1
      else:
        break

  return 0


for gender, click in students:

  if gender == 1:
    boy(click)

  if gender == 2:
    girl(click)

answer = ''
for i in range(1, len(switch) + 1):
  answer += str(switch[i-1]) + ' '

  if i % 20 == 0:
    answer += '\n'
  

print(answer)

