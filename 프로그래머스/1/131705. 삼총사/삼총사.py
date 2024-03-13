def solution(number):
    answer = [];
    indexAnswer = [];
    
    visited = [False] * len(number)
    
    temp = []
    
    arrIndex = []
    
    def dfs(depth):
        if depth == 3:
            print(arrIndex)
            if sum(temp) == 0:     
                
                temp2 = sorted(arrIndex)
                if temp2 not in indexAnswer:
                    indexAnswer.append(temp2)
                    answer.append(temp)
                    

                    
                    
                
            return
        
        for i, num in enumerate(number):
            if visited[i] == False:

                visited[i] = True
                temp.append(num)
                arrIndex.append(i)
                dfs(depth + 1)
                arrIndex.pop()
                temp.pop()
                visited[i] = False
        
        return
    
    
    dfs(0)
    
    return len(answer)
    
    
    
    