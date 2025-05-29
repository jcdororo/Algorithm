function solution(nums) {
    var answer = 0;
    const tempLength = parseInt(nums.length / 2)
    const tempCases = new Set(nums).size 
    // console.log(tempLength, tempCases)
    
    answer = tempCases >= tempLength ? tempLength : tempCases
    return answer;
}