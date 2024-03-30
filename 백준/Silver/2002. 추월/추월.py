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


# for key, value in inCar.items():
#   if value > outCar[key]:
#     result += 1
    
# print(result)
    
out_keys = list(outCar.keys())
# 지금 나온 차의 들어간 순서보다 나중에 나온 차의 들어간 순서가 앞인 경우에는 추월
for i in range(0, len(out_keys)-1):
    now_in = inCar[out_keys[i]]
    for j in range(i+1, len(out_keys)):
        next_in = inCar[out_keys[j]]
        if next_in < now_in:
            result += 1
            break
print(result)