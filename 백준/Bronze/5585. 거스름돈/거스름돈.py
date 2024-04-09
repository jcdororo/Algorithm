import sys

N = int(sys.stdin.readline().strip())


money = 1000 - N


cnt = 0

while money > 0:
  if money >= 500:
    money -= 500
  elif money >= 100:
    money -= 100
  elif money >= 50:
    money -= 50
  elif money >= 10:
    money -= 10
  elif money >= 5:
    money -= 5
  elif money >= 1:
    money -= 1

  cnt += 1

print(cnt)