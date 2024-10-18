/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    for(const num of nums){
        if(num > second){
            return true;
        }
        if(num < first){
            first = num;
        }

        if(num < second && num > first){
            second = num;
        }

        //console.log(first,second,num);
    }
    
    return false;
};

let nums = [1,2,3,4,5];
console.log(increasingTriplet(nums));