/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    function returnXorArray(nums){
        let val = 0;
        for(let i = 0; i < nums.length; i++){
            val ^= nums[i];
        }
        return val;
    }

    let n1 = nums1.length;
    let n2 = nums2.length;
    if(n1 % 2 === 0){
        if(n2 % 2 === 0){
            return 0;
        }
        else{
            return returnXorArray(nums1);
        }
    }else{
        if(n2 % 2 === 0){
            return returnXorArray(nums2);
        }
        else{
            return returnXorArray(nums1) ^ returnXorArray(nums2);
        }
    }

};

let nums1 = [1,2];
let nums2 = [3,4];
console.log(xorAllNums(nums1, nums2)); // 7