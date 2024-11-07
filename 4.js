/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let target = (len1 + len2) % 2 === 1 ? [Math.floor((len1 + len2) / 2)] : [(len1 + len2) / 2 - 1, (len1 + len2) / 2];
    let pointer_1 = 0;
    let pointer_2 = 0;
    let current = Infinity;

    while(true){
        if (nums1[pointer_1] < nums2[pointer_2] || pointer_2 === nums2.length){
            current = nums1[pointer_1];
            pointer_1 ++;
        }else{
            current = nums2[pointer_2];
            pointer_2 ++;
        }
        if (pointer_1 + pointer_2 === target[0] + 1){
            //console.log(target, pointer_1, pointer_2, current);
            let tmp_ans = current;
            let tmp_ans_2 = tmp_ans;
            if (target.length > 1){
                if (nums1[pointer_1] < nums2[pointer_2] || pointer_2 === nums2.length){
                    current = nums1[pointer_1];
                    pointer_1 ++;
                }else{
                    current = nums2[pointer_2];
                    pointer_2 ++;
                }
                tmp_ans_2 = current;
            }
            //console.log(target, pointer_1, pointer_2, current);
            return (tmp_ans + tmp_ans_2) / 2;
        }
    }
};

let nums1 = [2];
let nums2 = [];
console.log(findMedianSortedArrays(nums1, nums2)); 