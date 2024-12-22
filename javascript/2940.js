/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
    let maxIdx = []; // Min-heap using an array
    let results = new Array(queries.length).fill(-1);
    let storeQueries = new Array(heights.length).fill(0).map(() => []);

    // Store the mappings for all queries in storeQueries
    queries.forEach(([a, b], idx) => {
        if (a < b && heights[a] < heights[b]) {
            results[idx] = b;
        } else if (a > b && heights[a] > heights[b]) {
            results[idx] = a;
        } else if (a === b) {
            results[idx] = a;
        } else {
            storeQueries[Math.max(a, b)].push([Math.max(heights[a], heights[b]), idx]);
        }
    });

    // Helper functions for heap operations
    const heapPush = (heap, element) => {
        heap.push(element);
        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (heap[index][0] >= heap[parentIndex][0]) break;

            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
        }
    };

    const heapPop = (heap) => {
        if (heap.length === 0) return null;
        const min = heap[0];
        const end = heap.pop();
        if (heap.length > 0) {
            heap[0] = end;

            let index = 0;
            const length = heap.length;

            while (true) {
                let leftChild = 2 * index + 1;
                let rightChild = 2 * index + 2;
                let swapIndex = null;

                if (leftChild < length && heap[leftChild][0] < heap[index][0]) {
                    swapIndex = leftChild;
                }
                if (
                    rightChild < length &&
                    heap[rightChild][0] < (swapIndex === null ? heap[index][0] : heap[leftChild][0])
                ) {
                    swapIndex = rightChild;
                }
                if (swapIndex === null) break;

                [heap[index], heap[swapIndex]] = [heap[swapIndex], heap[index]];
                index = swapIndex;
            }
        }
        return min;
    };

    // Process the heights array
    heights.forEach((height, idx) => {
        // If the heap's smallest value is less than the current height, it is an answer to the query
        while (maxIdx.length > 0 && maxIdx[0][0] < height) {
            const [, qIdx] = heapPop(maxIdx);
            results[qIdx] = idx;
        }

        // Push the queries with their maximum index as the current index into the heap
        storeQueries[idx].forEach((element) => {
            heapPush(maxIdx, element);
        });
    });

    return results;
};




let heights = [5,3,8,2,6,1,4,6];
let queries = [[0,7],[3,5],[5,2],[3,0],[1,6]];
console.log(leftmostBuildingQueries(heights, queries));