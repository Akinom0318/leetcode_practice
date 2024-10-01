/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

var canArrange = function(arr, k) {
    let mod_arrays = {};

    mod_arrays[k] = [];
    for (let i = 0; i < arr.length; i++) {
        if(!mod_arrays[arr[i] % k]){
            mod_arrays[arr[i] % k] = [];
        }
        mod_arrays[arr[i] % k].push(arr[i]);
    }
    console.log(mod_arrays);
    for (let i = 0; i < Math.ceil(k / 2); i++) {
        if(!mod_arrays[i]){
            continue;
        }
        if(mod_arrays[k - i] === undefined || (mod_arrays[i].length + mod_arrays[k - i].length) % 2 !== 0){
            return false
        }
        
    }

    return true;
};

let arr = [1,2,3,4,5,6];
let k = 10;

console.log(canArrange(arr,k));