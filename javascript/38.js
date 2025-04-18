/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = '1';
    if (n === 1) return res;
    for(let i = 1; i < n; i++) {
        let count = 1;
        let temp = '';
        for(let j = 0; j < res.length; j++) {
            if(res[j] === res[j + 1]) {
                count++;
            } else {
                temp += count + res[j];
                count = 1;
            }
        }
        res = temp;
    }
    return res;
};