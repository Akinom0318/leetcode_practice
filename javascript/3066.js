/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
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
                if (this.heap[index] >= this.heap[parentIndex]) break;
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
                if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                    smallest = leftChild;
                }
                if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                    smallest = rightChild;
                }
                if (smallest === index) break;
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            }
        }
    }


    let min_heap = new MinHeap();
    for(const num of nums){
        min_heap.enqueue(num);
    }

    let first_min = min_heap.dequeue();
    let count = 0;
    while(first_min < k){
        let second_min = min_heap.dequeue();
        min_heap.enqueue(first_min * 2 + second_min);
        count++;
        first_min = min_heap.dequeue();
    }

    return count;
};

module.exports = {minOperations};