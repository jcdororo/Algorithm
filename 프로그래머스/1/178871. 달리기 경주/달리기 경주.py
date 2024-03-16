def solution(players, callings):
    dic = { player : i for i, player in enumerate(players) }
    
    for call in callings:
        front, me = dic.get(call) - 1, dic.get(call)
        players[front], players[me] = players[me], players[front]

        dic[players[front]] -= 1
        dic[players[me]] += 1
    
    return players