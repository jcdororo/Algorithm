def solution(id_list, report, k):
    counts = {}
    newDic = {}
    result = {}
    for x in id_list:
        result[x] = 0
        counts[x] = 0
        newDic[x] = set([])
            
    for r in report:
        r = r.split(' ')
        newDic[r[0]].add(r[1])
        
    for n in newDic:
        for m in newDic.get(n):
            counts[m] += 1
    
    for count in counts:
        if counts.get(count) >= k:
            for n in newDic:
                if count in newDic.get(n):
                    result[n] += 1
    
    return list(result.values())
