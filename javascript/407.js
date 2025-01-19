/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
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

    function validTile(row, col) {
        return row >= 0 && row < numRows && col >= 0 && col < numCols;
    }



    const numRows = heightMap.length;
    const numCols = heightMap[0].length;
    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const pq = new MinHeap();

    // Add all border cells to the priority queue
    for (let row = 0; row < numRows; row++) {
        if(row === 0 || row === numRows - 1) {
            for (let col = 1; col < numCols; col++) {
                pq.enqueue([row, col, heightMap[row][col]]);
                visited[row][col] = true;
            }
        }
        pq.enqueue([row, 0, heightMap[row][0]]);
        pq.enqueue([row, numCols - 1, heightMap[row][numCols - 1]]);
        visited[row][0] = true;
        visited[row][numCols - 1] = true;
    }


    let water = 0;

    while(!pq.isEmpty()) {
        const [row, col, height] = pq.dequeue();
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (validTile(newRow, newCol) && !visited[newRow][newCol]) {
                visited[newRow][newCol] = true;
                pq.enqueue([newRow, newCol, Math.max(height, heightMap[newRow][newCol])]);
                water += Math.max(0, height - heightMap[newRow][newCol]);
            }
        }
    }

    return water;
};

let heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]];
console.log(trapRainWater(heightMap)); // 4