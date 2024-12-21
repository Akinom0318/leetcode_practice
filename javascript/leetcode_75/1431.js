/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for (const child of candies){
        child + extraCandies === Math.max(child + extraCandies, Math.max(...candies)) ? result.push(true) : result.push(false);
    }

    return result;
};

let candies = [2,3,5,1,3];
let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));