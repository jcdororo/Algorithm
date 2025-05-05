function solution(money) {
    var answer = [~~(money / 5500), money - ((~~(money / 5500)) * 5500)];
    return answer;
}