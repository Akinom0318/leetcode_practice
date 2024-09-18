/**
 * @param {number[]} nums
 * @return {string}
 */

function compared_fn(a,b){
    let ab = Number(a + b);
    let ba = Number(b + a);

    return ab > ba ? 1 : -1;
}

var largestNumber = function(nums) {
    let str_nums = nums.map((item) => String(item));
    let result = "";
    str_nums.sort(compared_fn).reverse();

    str_nums.forEach(element => {
        result += element;
    });

    if((result.split('')).filter((item) => item === '0').length === result.length){
        return '0';
    }

    return result;
};

nums = [0,0,0];

console.log(largestNumber(nums));
