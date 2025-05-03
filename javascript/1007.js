/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let n = tops.length;
    let count = 0;
    

    function check(x) {
        let topCount = 0;
        let bottomCount = 0;
        for (let i = 0; i < n; i++) {
            if (tops[i] !== x && bottoms[i] !== x) {
                return -1;
            } else if (tops[i] !== x) {
                topCount++;
            } else if (bottoms[i] !== x) {
                bottomCount++;
            }
        }
        return Math.min(topCount, bottomCount);
    }

    let result_1 = check(tops[0]);
    let result_2 = check(bottoms[0]);

    if (result_1 === -1 && result_2 === -1) {
        return -1;
    } else if (result_1 === -1) {
        return result_2;
    } else if (result_2 === -1) {
        return result_1;
    } else {
        return Math.min(result_1, result_2);
    }
};

let tops = [2,1,2,4,2,2];
let bottoms = [5,2,6,2,3,2];
console.log(minDominoRotations(tops, bottoms)); // 2