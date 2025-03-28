/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let n = grid.length
    let m = grid[0].length;
    
    let indexedQueries = queries.map((v, i) => [v, i]);
    indexedQueries.sort((a, b) => a[0] - b[0]);

    let visited = Array.from({ length: n }, () => new Array(m).fill(false));
    let result = new Array(queries.length).fill(0);

    let heap = new MinHeap();
    heap.push([grid[0][0], 0, 0]); 
    visited[0][0] = true;

    let processed = 0, queryIndex = 0;

    while (queryIndex < indexedQueries.length) {
        let queryValue = indexedQueries[queryIndex][0];
        let queryIdx = indexedQueries[queryIndex][1];

        while (!heap.isEmpty() && heap.peek()[0] < queryValue) {
            let [value, x, y] = heap.pop();
            processed++;

            for (const [dx, dy] of directions) {
                let newX = x + dx
                let newY = y + dy;
                
                if (newX >= 0 && newX < n && newY >= 0 && newY < m && !visited[newX][newY]) {
                    visited[newX][newY] = true;
                    heap.push([grid[newX][newY], newX, newY]);
                }
            }
        }

        result[queryIdx] = processed;
        queryIndex++;
    }

    return result;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return top;
    }

    peek() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let left = 2 * index + 1, right = 2 * index + 2;
            let smallest = left;
            if (right < this.heap.length && this.heap[right][0] < this.heap[left][0]) {
                smallest = right;
            }
            if (this.heap[index][0] <= this.heap[smallest][0]) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

let grid = [[420766,806051,922751],[181527,815280,904568],[952102,4037,140319],[324081,17907,799523],[176688,90257,83661],[932477,621193,623068],[135839,554701,511427],[227575,450848,178065],[785644,204668,835141],[313774,167359,501496],[641317,620688,74989],[324499,122376,270369],[2121,887154,848859],[456704,7763,662087],[286827,145349,468865],[277137,858176,725551],[106131,93684,576512],[372563,944355,497187],[884187,600892,268120],[576578,515031,807686]];
let queries = [352655,586228,169685,541073,584647,413832,576537,616413];
console.log(maxPoints(grid, queries));