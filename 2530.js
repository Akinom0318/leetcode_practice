import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let max_heap = new MaxPriorityQueue({compare: (a, b) => b - a});

    for (const num of nums){
        max_heap.enqueue(num, num);
    }

    let result = 0;

    for (let i = 0; i < k; i++) {
        let current_max = max_heap.dequeue();
        result += current_max;
        max_heap.enqueue(Math.ceil(current_max / 3));
        
    }

    return result;
};


let nums = [1,10,3,3,3];
console.log(maxKelements(nums, 3));