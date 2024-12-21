/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sort_by_fre(a,b){
    if(a[1] === b[1]){
        return b[0] - a[0];
    }else{
        return a[1] - b[1];
    }
}

var frequencySort = function(nums) {
    let nums_fre = new Object();
    nums.forEach((e) => {
        let e_str = e.toString();
        if(nums_fre.hasOwnProperty(e_str)){
            nums_fre[e_str] += 1;
        }else{
            nums_fre[e_str] = 1;
        }
    });

    let tmp_array = [];
    for(const [key,value] of Object.entries(nums_fre)){
        tmp_array.push([key,value])
    }

    tmp_array = tmp_array.sort(sort_by_fre);
    let return_array = [];
    for(const value of tmp_array){
        for (let i = 0; i < value[1]; i++) {
            return_array.push(Number(value[0]))
        }
    }
    return return_array;
};