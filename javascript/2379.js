/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0;
    let right = 0;
    let black_count = 0;
    let min = Infinity;
    while(right < k){
        if(blocks[right++] === 'B'){
            black_count++;
        }
    }

    min = Math.min(min, k - black_count);

    while(right < blocks.length){
        if(blocks[left++] === 'B'){
            black_count--;
        }
        if(blocks[right++] === 'B'){
            black_count++;
        }
        min = Math.min(min, k - black_count);
    }

    return min;
};

let blocks = "WBWBBBW";
let k = 2;
console.log(minimumRecolors(blocks, k)); // 3