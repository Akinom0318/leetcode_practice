/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    let visited = Array.from({ length: moveTime.length }, () => Array(moveTime[0].length).fill(false));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let currentTime = 0;
    let minHeap = new MinHeap();

    minHeap.enqueue([0, 0, 0, 1]); // [x, y, time]
    visited[0][0] = true;
    while (!minHeap.isEmpty()) {
        //console.log(minHeap.heap);
        let [x, y, time, oddOrEven] = minHeap.dequeue();
        currentTime = Math.max(currentTime, time);
        if (x === moveTime.length - 1 && y === moveTime[0].length - 1){
            return currentTime;
        }
        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newX < moveTime.length && newY >= 0 && newY < moveTime[0].length && !visited[newX][newY]) {
                visited[newX][newY] = true;
                let newTime = 0;
                if(moveTime[newX][newY] > currentTime) {
                    newTime = moveTime[newX][newY] + oddOrEven;
                }else{
                    newTime = currentTime + oddOrEven;
                }
                minHeap.enqueue([newX, newY, newTime, oddOrEven === 1 ? 2 : 1]);
            }
        }
    }
    return -1;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    enqueue(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }
    dequeue() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][2] >= this.heap[parentIndex][2]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    bubbleDown(index) {
        let length = this.heap.length;
        let leftChild, rightChild, smallest;
        while (true) {
            leftChild = 2 * index + 1;
            rightChild = 2 * index + 2;
            smallest = index;
            if (leftChild < length && this.heap[leftChild][2] < this.heap[smallest][2]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild][2] < this.heap[smallest][2]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

let moveTime = [[4,13,67],[20,24,57]];
console.log(minTimeToReach(moveTime)); // 8