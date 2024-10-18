/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxium = 0;
    nums.forEach((item) => maxium = maxium | item);
    let possible_array = [];

    function max(maxium, sub_array, possible_array, current_index){
        let current_max = 0;
        sub_array.forEach((item) => current_max = current_max | item);

        if(current_max !== maxium){
            return;
        }else{
            possible_array.push(sub_array);
            for (let i = current_index; i < sub_array.length; i ++){
                let tmp = [...sub_array];
                tmp.splice(i,1);
                max(maxium, tmp, possible_array, i)
            }
        }
    }

    max(maxium,nums,possible_array, 0);


    return possible_array.length;
};


let nums = [2,2,2];
console.log(countMaxOrSubsets(nums));