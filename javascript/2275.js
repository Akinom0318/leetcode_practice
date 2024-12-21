/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let hash = new Map();
    let result = 0;
    candidates.forEach((item) => {
        const bit = item.toString(2);
        let offset = bit.length;
        for (let i = offset - 1; i >= 0; i--) {
            const c = bit[i];
            if (c === '1'){
                if (hash.has(offset - i)){
                    hash.set(offset - i, hash.get(offset - i) + 1);
                } else{
                    hash.set(offset - i, 1);
                }
            }
        }
    });

    hash.forEach((value) => {
        result = Math.max(result, value);
    })

    return result;
};

let can = [16,17,71,62,12,24,14];
console.log(largestCombination(can));