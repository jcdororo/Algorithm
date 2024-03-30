import sys

N = int(sys.stdin.readline().strip())

inCar = {}
outCar = {}

result = 0

for i in range(N * 2):
  name = sys.stdin.readline().strip()
  if i < N:
    inCar[name] = i
  else:
    outCar[name] = i - N


out_keys = list(outCar.keys())
for i in range(0, len(out_keys) - 1):
  nowOut = inCar[out_keys[i]]

  for j in range(i + 1, len(out_keys)):
    nextOut = inCar[out_keys[j]]
    if nextOut < nowOut:
      result += 1
      break


print(result)

