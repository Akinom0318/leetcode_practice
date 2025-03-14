/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let lowerBound = 0;
    let upperBound = Math.max(...candies);


    function binarySearch(target, lowerBound, upperBound){
        let left = lowerBound;
        let right = upperBound;
        let result = 0;

        while(left <= right){
            let valid = 0;
            let mid = Math.floor((left + right) / 2);
            for(const pile of candies){
                valid += Math.floor(pile / mid);
                if(valid >= target){
                    result = mid;
                    left = mid + 1;
                    break;
                }
            }
            if(valid < target){
                right = mid - 1;
            }
            
        }

        return result;
    }

    return binarySearch(k,lowerBound,upperBound);
};

let candies = [1,2,3,4,10];
let k = 5;
console.log(maximumCandies(candies, k));