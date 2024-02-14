
import sys
n = int(sys.stdin.readline())
road = list(map(int, sys.stdin.readline().split(' ')))
gasStations = list(map(int, sys.stdin.readline().split(' ')))

minStation = min(gasStations[:-1])
sum = sum(road)
roadIndex = 0
stationIndex = 0
result = 0

for i, price in enumerate(gasStations):
  if gasStations[stationIndex] >= gasStations[stationIndex+1]:
    result += gasStations[stationIndex]*road[roadIndex]
    sum -= road[roadIndex]
    roadIndex += 1
    stationIndex += 1
  else:
    if gasStations[stationIndex] <= minStation:
      result += gasStations[stationIndex]*sum
      break
    else:
      result += gasStations[stationIndex]*road[roadIndex]
      sum -= road[roadIndex]
      roadIndex += 1
      stationIndex += 1

  if stationIndex >= len(gasStations) or roadIndex >= len(road):
    break

print(result)
  

