/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    class MaxHeap {
        //the item will be like [delta, [pass, total]]
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
    
                if (this.heap[index][0] <= this.heap[parentIndex][0]) break;
    
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
    
                if (leftChild < length && this.heap[leftChild][0] > this.heap[index][0]) {
                    swapIndex = leftChild;
                }
    
                if (
                    rightChild < length &&
                    this.heap[rightChild][0] > (swapIndex === null ? this.heap[index][0] : this.heap[leftChild][0])
                ) {
                    swapIndex = rightChild;
                }
    
                if (swapIndex === null) break;
    
                this.swap(index, swapIndex);
                index = swapIndex;
            }
        }
    }
    
    let max_heap = new MaxHeap();
    for(const [pass, total] of classes) {
        max_heap.insert([((total - pass) / (total * (total + 1))),[pass, total]]);
    }


    //console.log(max_heap.heap);
    while(extraStudents > 0) {
        let [delta, [pass, total]] = max_heap.extractMax();
        pass++;
        total++;
        max_heap.insert([(total - pass) / (total * (total + 1)), [pass, total]]);
        extraStudents--;
        //console.log(max_heap.heap);

    }

    //console.log(max_heap.heap);

    let average = 0;
    for (const [delta, [pass, total]] of max_heap.heap) {
        average += pass / total;
    }
    average /= max_heap.heap.length;

    return average;
};

let classes = [[2,4],[3,9],[4,5],[2,10]];
let extraStudents = 4;
console.log(maxAverageRatio(classes, extraStudents)); // 0.78333