class MinHeap {
    constructor() {
        this.heap = [];
        this.indexMap = new Map(); // To keep track of the indices of elements in the heap
    }

    insert(val) {
        if (this.indexMap.has(val)) return; // Avoid duplicate entries
        this.heap.push(val);
        this.indexMap.set(val, this.heap.length - 1);
        this.bubbleUp();
    }

    remove(val) {
        if (!this.indexMap.has(val)) return; // Value not found
        const index = this.indexMap.get(val);
        this.swap(index, this.heap.length - 1);
        this.heap.pop();
        this.indexMap.delete(val);
        this.bubbleDown(index);
    }

    getMin() {
        return this.heap.length > 0 ? this.heap[0] : -1;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.bubbleDown(smallest);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        this.indexMap.set(this.heap[i], i);
        this.indexMap.set(this.heap[j], j);
    }
}

class NumberContainers {
    constructor() {
        this.numbersToIndexes = new Map();
        this.indexToNumbers = new Map();
    }

    change(index, number) {
        if(this.indexToNumbers.has(index)) {
            const prevNumber = this.indexToNumbers.get(index);
            this.numbersToIndexes.get(prevNumber).remove(index);
        }
        this.indexToNumbers.set(index, number);
        if (!this.numbersToIndexes.has(number)) {
            this.numbersToIndexes.set(number, new MinHeap());
        }
        this.numbersToIndexes.get(number).insert(index);
        return null;
    }

    find(number) {
        if (this.numbersToIndexes.has(number)) {
            return this.numbersToIndexes.get(number).getMin();
        }

        return -1;
    }
}


module.exports = NumberContainers;