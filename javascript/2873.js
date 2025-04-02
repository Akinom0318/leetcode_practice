/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxiumNumber = -Infinity;
    let maxDifference = -Infinity;
    let maxTriplet = -Infinity;


    for(const num of nums){
        maxTriplet = Math.max(maxTriplet, maxDifference * num);
        maxiumNumber = Math.max(maxiumNumber, num);
        maxDifference = Math.max(maxDifference, maxiumNumber - num);
    }

    //console.log(maxiumNumber, maxDifference, maxTriplet);

    return maxTriplet;
};

let nums = [2,3,1];
console.log(maximumTripletValue(nums));