/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {

    let s_array = s.split('');
    let left = 0;
    let right = s.length - 1;
    let count = 0;

    while(left <= right){
        while(s_array[left] !== '1' && right > left){
            left ++;
        }
        while(s_array[right] !== '0' && right > left){
            right --;
        }
        count += right - left;
        left ++;
        right --;
    }


    return count;
};


let s = "1000000";

console.log(minimumSteps(s));