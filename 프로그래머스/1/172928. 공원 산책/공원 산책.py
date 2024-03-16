def solution(park, routes):
    index = [0,0]
    
    def isOut(direc, dis):
        if direc == 'E':
            if index[1] + dis >= len(park[0]):
                return True  
        elif direc == 'W':
            if index[1] - dis < 0:
                return True  
        elif direc == 'S':
            if index[0] + dis >= len(park):
                return True  
        else:
            if index[0] - dis < 0:
                return True 
            
        return False
    
    def isDummy(direc, dis):
        if direc == 'E':
            for i in range(dis):
                if park[index[0]][index[1] + i + 1] == 'X':
                    return True
        elif direc == 'W':
            for i in range(dis):
                if park[index[0]][index[1] - (i + 1)] == 'X':
                    return True
        elif direc == 'S':
            for i in range(dis):
                if park[index[0] + i + 1][index[1]] == 'X':
                    return True
        else:
            for i in range(dis):
                if park[index[0] - (i + 1)][index[1]] == 'X':
                    return True
                
        return False
    
    for i, x in enumerate(park):
        x = list(x)
        for j, y in enumerate(x):
            if park[i][j] == 'S':
                index[0] = i
                index[1] = j
        
    for route in routes:
        route = route.split(' ')
        direction = route[0]
        distance = int(route[1])
        
        if not isOut(direction,distance):
            if not isDummy(direction,distance):
                if direction == 'E':
                    index[1] += distance
                elif direction == 'W':
                    index[1] -= distance
                elif direction == 'S':
                    index[0] += distance
                else:
                    index[0] -= distance
    
    
    return index