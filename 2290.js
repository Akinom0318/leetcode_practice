/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
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

    let row = grid.length;
    let col = grid[0].length;
    let pq = new MinHeap();
    let visited = new Array(row).fill(0).map(() => new Array(col).fill(0));

    pq.enqueue([0, 0, 0]);
    visited[0][0] = 1;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (!pq.isEmpty()) {
        let [x, y, obs] = pq.dequeue();
        if (x === row - 1 && y === col - 1) {
            return obs;
        }
        for (const [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;
            if (nx >= 0 && nx < row && ny >= 0 && ny < col && !visited[nx][ny]) {
                let nobs = obs + (grid[nx][ny] === 1 ? 1 : 0);
                visited[nx][ny] = 1;
                pq.enqueue([nx, ny, nobs]);
            }
        }
    }
};

let grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]];
console.log(minimumObstacles(grid));