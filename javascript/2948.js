/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
function lexicographicallySmallestArray(nums, limit) {
    const numsSorted = [...nums].sort((a, b) => a - b);

    let currGroup = 0;
    const numToGroup = {};
    numToGroup[numsSorted[0]] = currGroup;

    const groupToList = {};
    groupToList[currGroup] = [numsSorted[0]];

    for (let i = 1; i < numsSorted.length; i++) {
        if (Math.abs(numsSorted[i] - numsSorted[i - 1]) > limit) {
            currGroup++;
        }

        numToGroup[numsSorted[i]] = currGroup;

        if (!groupToList[currGroup]) {
            groupToList[currGroup] = [];
        }
        groupToList[currGroup].push(numsSorted[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const group = numToGroup[num];
        nums[i] = groupToList[group].shift();
    }

    return nums;
}


let nums = [5,5,5,6];
let limit = 3;
console.log(lexicographicallySmallestArray(nums, limit));