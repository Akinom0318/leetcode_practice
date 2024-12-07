class MaxHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] <= this.heap[parentIndex]) break;

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    getMax() {
        return this.heap[0] || null;
    }

    extractMax() {
        if (this.heap.length === 0) return null;

        const max = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }

        return max;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let swapIndex = null;

            if (leftChild < length && this.heap[leftChild] > this.heap[index]) {
                swapIndex = leftChild;
            }

            if (
                rightChild < length &&
                this.heap[rightChild] > (swapIndex === null ? this.heap[index] : this.heap[leftChild])
            ) {
                swapIndex = rightChild;
            }

            if (swapIndex === null) break;

            this.swap(index, swapIndex);
            index = swapIndex;
        }
    }
}
