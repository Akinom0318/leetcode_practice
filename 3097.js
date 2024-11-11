/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// mine
var minimumSubarrayLength0 = function(nums, k) {
    function allOrBits (start, end){
        let number = 0;
        for (let index = start; index !== end; index++) {
            number |= nums[index];
        }
        //console.log(end - start,start, number);
        return number;
    }
    let len = 1;
    let index = 0;
    while(true){
        //console.log(index, len);
        if (len > nums.length){
            return - 1;
        }
        
        if (allOrBits(index, index + len) >= k){
            return len;
        }
        index ++;
        if (index > nums.length - len){
            len ++;
            index = 0;
        }
    }
};

// not TLE ver.
var minimumSubarrayLength = function(nums, k) {
    let minLength = Infinity;
    let windowStart = 0;
    let windowEnd = 0;
    let bitCounts = new Array(32).fill(0);  // Tracks count of set bits at each position

    // Expand window until the end of the array
    while (windowEnd < nums.length) {
        // Add the current number to the window
        updateBitCounts(bitCounts, nums[windowEnd], 1);

        // Contract the window while OR value is valid
        while (windowStart <= windowEnd && convertBitsToNum(bitCounts) >= k) {
            // Update the minimum length found so far
            minLength = Math.min(minLength, windowEnd - windowStart + 1);

            // Remove leftmost number and shrink window
            updateBitCounts(bitCounts, nums[windowStart], -1);
            windowStart++;
        }

        windowEnd++;
    }

    return minLength === Infinity ? -1 : minLength;
};

// Helper function to update the bit counts based on the given number and delta
function updateBitCounts(bitCounts, number, delta) {
    for (let pos = 0; pos < 32; pos++) {
        if (number & (1 << pos)) {
            bitCounts[pos] += delta;
        }
    }
}

// Helper function to convert bit counts to a number using OR operation
function convertBitsToNum(bitCounts) {
    let result = 0;
    for (let pos = 0; pos < 32; pos++) {
        if (bitCounts[pos]) {
            result |= (1 << pos);
        }
    }
    return result;
}


let nums = [1,2,32,21];
let k = 55;
console.log(minimumSubarrayLength(nums, k));