import sys

N = int(sys.stdin.readline().strip())

rooms = []
room = []

for _ in range(N):
  room.append(list(sys.stdin.readline().strip()))

# print(room)

# room 오른쪽으로 90도 뒤집기
# 0,0 > 4,0
# 0,4 > 4,4

newRoom = []

for i in range(N):
  temp = []
  for j in range(N):
    temp.append(room[(N-1)-j][i])

  newRoom.append(temp)
  # print(temp)


def counter(N, room):
  result = 0
  for i in range(N):
    roomRange = 0
    for j in range(N):
      if room[i][j] == '.':
        roomRange += 1
        if j == N - 1 and roomRange >= 2:
          result += 1

      if room[i][j] == 'X':
        if roomRange >= 2:
          result += 1
        roomRange = 0

  return str(result)

print(counter(N, room) + ' ' + counter(N, newRoom))
  
  