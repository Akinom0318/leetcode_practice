/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let sorted_intervals = [...intervals].sort((a,b) => a[0] - b[0]);
    
    let minHeap = new MinPriorityQueue({ priority: x => x });

    for (const [start, end] of sorted_intervals) {

        if (!minHeap.isEmpty() && minHeap.front().element <= start) {
            minHeap.dequeue();
        }
        minHeap.enqueue(end);
    }

    return minHeap.size();
};

console.log(minGroups(intervals))