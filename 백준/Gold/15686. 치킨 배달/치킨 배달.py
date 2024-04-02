import sys
from itertools import permutations, combinations


N, M = map(int, sys.stdin.readline().strip().split(' '))

city = []
houses = []
chickens = []

for _ in range(N):
  city.append(list(map(int,sys.stdin.readline().strip().split(' '))))

for i in range(len(city)):
  for j in range(len(city[i])):
    if city[i][j] == 1:
      houses.append([i+1,j+1])
    if city[i][j] == 2:
      chickens.append([i+1,j+1])


orders = combinations(chickens, M)
answer = 1e9
for order in orders:
  result = 0
  for house in houses:
    minLength = 1e9
    for chicken in order:
      temp = abs(house[0] - chicken[0]) + abs(house[1] - chicken[1])
      minLength = min(minLength, temp)
    result += minLength
  answer = min(result, answer)


print(answer)
    

