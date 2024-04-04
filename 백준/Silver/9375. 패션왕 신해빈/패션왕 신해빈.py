import sys
from itertools import combinations

T = int(sys.stdin.readline().strip())
# print(T)

for _ in range(T):
  N = int(sys.stdin.readline().strip())

  dic = {}

  for i in range(N):
    val, key = sys.stdin.readline().strip().split(' ')

    if not dic.get(key, False):
      dic[key] = set()

    dic[key].add(val)
                                      # {
                                      # 'headgear': {'turban', 'hat'}, 
                                      # 'eyewear': {'sunglasses'}
                                      # }


  count = 1
  for key in dic.keys():
      count *= len(dic[key]) + 1      # + 1은 아무것도 입지 않았을때,
  print(count-1)                      # - 1은 아무것도 입지 않은 
                                      # 중복된 경우의수 빼주기
  

  
