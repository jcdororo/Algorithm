import sys

N = int(sys.stdin.readline().strip())
answer = 0
hello = set()
canOpen = False

for _ in range(N):
  word = sys.stdin.readline().strip()
  # ENTER 인사
  if word == "ENTER" and canOpen:
    hello = set()      
  
  if word == "ENTER" and not canOpen:
    # print('아무것도안함')
    canOpen = True

  if word != "ENTER" and canOpen and word not in hello:
    hello.add(word)
    answer += 1
  
  # if word != "ENTER" and canOpen and word in hello:
  #   print('')


print(answer)
      
    
    


