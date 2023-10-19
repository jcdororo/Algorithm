/* /dev/stdin */
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


class Queue {
  constructor() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.queue[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue(){
    const item = this.queue[this.headIndex];
    delete this.queue[this.headIndex];
    this.headIndex++;
    return item;
  }
  getLength() {
    return this.tailIndex - this.headIndex;
    
  }
}

const MAX = 100001;
let [n, k] = input[0].split(' ').map(Number);
visited = Array(MAX).fill(0);

console.log(bfs());

function bfs() {
  queue = new Queue();
  queue.enqueue(n);

  // visited[start] = true;

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    if(cur == k) {
      return visited[cur];
    }
    

    for(let nxt of [cur -1, cur + 1, cur *2]){
      if(nxt < 0 || nxt >= MAX) continue;
      
      if(visited[nxt] == 0){
        visited[nxt] = visited[cur] + 1;
        queue.enqueue(nxt);
      }
    }
  }
  
}