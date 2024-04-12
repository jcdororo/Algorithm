"""
"""
import sys
                                  
K = int(sys.stdin.readline().strip())   # 케이스 갯수 받아주고

stack = []                              # 스택 선언 후
for _ in range(K):                      # K번 만큼 반복한다.
  money = int(sys.stdin.readline().strip()) # 돈 받아서
  
  if money != 0:                        # 0아닌겨
    stack.append(money)                 # 넣고
  
  if money == 0:                        # 0인겨
    stack.pop()                         # 빼고

print(sum(stack))                       # 합출력
