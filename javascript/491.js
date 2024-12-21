/**
 * @param {number[]} nums
 * @return {number[][]}
 */



var findSubsequences = function(nums) {
    let result = new Set();
    let current_array = [];
    function path_down(index){
        if(index === nums.length){
            if(current_array.length > 1){
                result.add(JSON.stringify(current_array));
            }
            return;
        }
        if(!current_array.length || current_array[current_array.length - 1] <= nums[index]){
            current_array.push(nums[index]);
            path_down(index + 1);
            current_array.pop();
        }
        path_down(index + 1);
    }
    path_down(0);
    return Array.from(result).map(JSON.parse);
};
findSubsequences([4,6,6,7]);
