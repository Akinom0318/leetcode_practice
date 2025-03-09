/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */

var numberOfAlternatingGroups = function(colors, k) {
    let n = colors.length;
    for(let i = 0; i < k; i ++){
        colors.push(colors[i]);
    }
    let count = 0;

    let left = 0;
    let right = 1;

    while(left < n){
        if(colors[right] !== colors[right + 1]){
            right++;
        }else{
            left = right;
            right = left + 1;
            continue;
        }

        if(right < k + left){
            continue;
        }

        left ++;
        count ++;
    }

   

    return count;
};

let colors = [0,1,0,1,0];
let k = 3;
console.log(numberOfAlternatingGroups(colors,k));

// module.exports = {
//     numberOfAlternatingGroups,
// }