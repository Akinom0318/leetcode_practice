/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let module = 1000000007;

    let prefixSum = [0];
    let oddSumCount = [0];
    let evenSumCount = [0];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        prefixSum.push(prefixSum[i] + arr[i]);
        if (prefixSum[i + 1] % 2 === 0) {
            evenSumCount.push(evenSumCount[i] + 1);
            oddSumCount.push(oddSumCount[i]);
            result += oddSumCount[i];
        } else {
            evenSumCount.push(evenSumCount[i]);
            oddSumCount.push(oddSumCount[i] + 1);
            result += evenSumCount[i] + 1;
        }
    }


    return result % module;
};

let arr = [1,2,3,4,5,6,7];
console.log(numOfSubarrays(arr)); // 4  