/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    const countNumbersWithPrefix = (prefix, n) => {
        let current = prefix;
        let next = prefix + 1;
        let count = 0;
    
        while (current <= n) {
            count += Math.min(n + 1, next) - current;
            current *= 10;
            next *= 10;
        }
        return count;
    };

    let current = 1;
    k --;
    while(k > 0){
        let count = countNumbersWithPrefix(current, n)

        if(count <= k){
            k -= count;
            current ++;
        }else{
            current *= 10;
            k --;
        }
    }

    return current;

};


let n = 13;
let k = 2;

console.log(findKthNumber(n,k));