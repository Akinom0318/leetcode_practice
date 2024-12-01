/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let item of arr) {
        if (arr.includes(item * 2)) {
            if (item === 0 && arr.indexOf(0) === arr.lastIndexOf(0)) {
                continue;
            }
            return true;
        }
    }
    return false;
};

console.log(checkIfExist([-2,0,10,-19,4,6,-8]));