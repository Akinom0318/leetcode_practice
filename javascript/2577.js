/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function(grid) {
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
    if (grid[0][1] > 1 && grid[1][0] > 1) {
        return -1;
    }



    let row = grid.length;
    let col = grid[0].length;
    let pq = new MinHeap();
    let visited = new Array(row).fill(0).map(() => new Array(col).fill(0));
    pq.enqueue([0, 0, 0]);

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let require_time = 0;
    let prev_point = [];
    while (!pq.isEmpty()) {
        let [x, y, current_time] = pq.dequeue();
        if (x === row - 1 && y === col - 1) {
            return current_time;
        }
        for (const [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;
            if (nx < 0 || nx >= row || ny < 0 || ny >= col) {
                continue;
            }
            if (visited[nx][ny] === 1) {
                continue;
            }
            prev_point = [x, y];
            require_time = grid[nx][ny];
            visited[nx][ny] = 1;
            if (current_time >= require_time) {
                pq.enqueue([nx, ny, current_time + 1]);
            }else{
                let time_to_wait = require_time - current_time;
                pq.enqueue([nx, ny, time_to_wait % 2 === 0 ? require_time + 1 : require_time]);
            }

        }
    }
    return -1;
};

let grid = [[0,1,99],
            [3,99,99],
            [4,5,6]];
console.log(minimumTime(grid)); // 18