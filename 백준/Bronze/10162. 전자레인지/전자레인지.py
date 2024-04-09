import sys

N = int(sys.stdin.readline().strip())

button = [0, 0, 0]

while N > 0:
  if N >= 300:
    N -= 300
    button[0] += 1
  elif N >= 60:
    N -= 60
    button[1] += 1
  elif N >= 10:
    N -= 10
    button[2] += 1
  else:
    button = [-1]
    break

  

print(*button)