/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let sum = quantities.reduce((a,b) => a + b);

    function binSearch(target, upper_bound, lower_bound){
        let left = lower_bound;
        let right = upper_bound;
        let result = -1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if (mid * n >= target){
                result = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
            console.log(sum, left, right, mid, result);
        }
        return result;
    }


    return binSearch(sum, n, 0) === -1 ? Math.max(...quantities) : binSearch(sum, n, 0);
};

let n = 22;
let quantities = [25,11,29,6,24,4,29,18,6,13,25,30];
console.log(minimizedMaximum(n, quantities)); // 17