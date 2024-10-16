/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for (let index = 0; index < flowerbed.length; index++) {
        const front = flowerbed[index - 1];
        const current = flowerbed[index];
        if(current === 1){
            continue;
        }
        const rear = flowerbed[index + 1];
        
        if(front === 1 || rear === 1){
            continue;
        }

        flowerbed[index] = 1;
        count ++;
    }

    return count >= n;
};

let flowerbed = [0,0,1,0,1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));