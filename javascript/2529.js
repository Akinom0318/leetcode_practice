/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    function binarySearchNeg(nums){
        let left = 0;
        let right = nums.length - 1;
        let ind = nums.length;
        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);
            if(nums[mid] < 0){
                left = mid + 1
            }else{
                right = mid - 1;
                ind = mid;
            }
        }

        return ind;
    }


    function binarySearchPos(nums){
        let left = 0;
        let right = nums.length - 1;
        let ind = nums.length;
        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);
            if(nums[mid] <= 0){
                left = mid + 1
            }else{
                right = mid - 1;
                ind = mid;
            }
        }

        return ind;
    }


    let posPivot = binarySearchPos(nums);
    let negPivot = binarySearchNeg(nums);


    let posCount = nums.length - posPivot;
    let negCount = negPivot;

    return Math.max(posCount, negCount);
};

let nums = [0,0,0];
console.log(maximumCount(nums));