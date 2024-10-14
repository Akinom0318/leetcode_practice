/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let labeled_nums = [];

    for (let i = 0; i < nums.length; i++) {
        labeled_nums.push([i, 0 ,nums[i]]);
    }

    let range = [-Infinity, Infinity];
    let smallest_label = -1;
    while(true){
        let current_min = Infinity;
        let current_max = -Infinity;
        if(smallest_label > -1 && labeled_nums[smallest_label][1] === labeled_nums[smallest_label][2].length){
            break;
        }

        for (const [label, current_index, num] of labeled_nums){
            //console.log([label, current_index, num]);
            if(num[current_index] > current_max){
                current_max = num[current_index];
            }

            if(num[current_index] < current_min){
                current_min = num[current_index];
                smallest_label = label;
            }
            //console.log(current_min, current_max, range);
        }

        labeled_nums[smallest_label][1] ++;
        let tmp_range = [current_min, current_max];
        if(range[1] - range[0] > tmp_range[1] - tmp_range[0]){
            range = [...tmp_range];
        }
    }

    return range;
};

let nums = [
            [4,10,15,24,26],
            [0,9,12,20],
            [5,18,22,30]
        ];
let nums2 = [[1,2,3],[1,2,3],[1,2,3]];

console.log(smallestRange(nums2));