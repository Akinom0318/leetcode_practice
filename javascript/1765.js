/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
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

    let m = isWater.length;
    let n = isWater[0].length;
    let res = Array(m).fill().map(() => Array(n).fill(-1));
    let visited = Array(m).fill().map(() => Array(n).fill(false));
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let minHeap = new MinHeap();


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                minHeap.enqueue([i, j, 0]);
                visited[i][j] = true;
            }
        }
    }

    while(!minHeap.isEmpty()) {
        let [i, j, height] = minHeap.dequeue();
        res[i][j] = height;
        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) continue;
            minHeap.enqueue([x, y, height + 1]);
            visited[x][y] = true;
        }
    }

    return res;

};

//queue version
var highestPeak = function(isWater) {
    let m = isWater.length;
    let n = isWater[0].length;
    let res = Array(m).fill().map(() => Array(n).fill(-1));
    let visited = Array(m).fill().map(() => Array(n).fill(false));
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                queue.push([i, j, 0]);
                visited[i][j] = true;
            }
        }
    }

    while(queue.length) {
        let [i, j, height] = queue.shift();
        res[i][j] = height;
        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) continue;
            queue.push([x, y, height + 1]);
            visited[x][y] = true;
        }
    }

    return res;

};