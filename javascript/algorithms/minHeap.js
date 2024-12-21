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