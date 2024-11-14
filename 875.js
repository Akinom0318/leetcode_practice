/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let upper_bound = Math.max(...quantities);

    function binSearch(target, upper_bound, lower_bound){
        let left = lower_bound;
        let right = upper_bound;
        let result = -1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            let sum = 0;
            for (let qunatity of quantities){
                sum += Math.ceil(qunatity / mid);
            }
            if (sum <= target){
                result = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return result;
    }


    return binSearch(n, upper_bound, 1);
};

let pile = [30,11,23,4,20];
let h = 6;
console.log(minEatingSpeed(pile, h)); // 4