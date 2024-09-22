/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let result = new Array(n).fill(0).map((item, i) => (item = i + 1));

    return result.map((item) => String(item)).sort().map((item) => Number(item));

};

let n = 13;

console.log(lexicalOrder(n));