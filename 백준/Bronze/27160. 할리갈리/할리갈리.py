import sys

fruits = {
  "STRAWBERRY" : 0,
  "BANANA" : 0,
  "LIME" : 0,
  "PLUM" : 0
}

N = sys.stdin.readline().strip()

answer = 'NO'

for _ in range(int(N)):
  fruit, count = sys.stdin.readline().strip().split(' ')

  fruits[fruit] += int(count)

if 5 in fruits.values():
  answer = 'YES'

print(answer)

