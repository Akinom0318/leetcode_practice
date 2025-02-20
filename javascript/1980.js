/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums[0].length;

    let hash = new Map();
    for(const num of nums) {
        hash.set(num, true);
    }

    let result = "";
    function generateAll(str){
        let tmp = str;
        if(str.length === n) {
            if(!hash.has(str)) {
                result = str;
                return;
            }
            return;
        }
        generateAll(tmp + "0");
        generateAll(tmp + "1");
    }

    generateAll("");
    return result;
};

let nums = ["111","011","001"];
console.log(findDifferentBinaryString(nums)); // "101"