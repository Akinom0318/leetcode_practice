/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    // check sorted
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            break;
        }
        if (i === arr.length - 2) {
            return 0;
        }
    }
    
    let n = arr.length;
    if(n === 1) return 0;

    let prefix = [arr[0]];
    let suffix = [arr[n - 1]];
    for (let i = 1; i < n; i++) {
        if (arr[i] >= prefix[prefix.length - 1]) {
            prefix.push(arr[i]);
        } else {
            break;
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] <= suffix[suffix.length - 1]) {
            suffix.push(arr[i]);
        } else {
            break;
        }
    }
    suffix.reverse();

    while (prefix.length && suffix.length && prefix[0] >= suffix[0]) {
        suffix.shift();
    }
    while(prefix.length && suffix.length && prefix[prefix.length - 1] > suffix[0]) {
        prefix.pop();
    }
    //console.log(prefix,suffix)
    while (prefix.length && suffix.length && prefix[prefix.length - 1] > suffix[0]) {
        suffix.shift();
    }
    //console.log(prefix,suffix)

    return n - prefix.concat(suffix).length;
};

let arr = [1,2,3,10,4,2,3,5];
console.log(findLengthOfShortestSubarray(arr));