/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c] = nums.sort((x, y) => x - y);
    
    
    function isTriangle(a, b, c) {
        return a + b > c;
    }

    if (!isTriangle(a, b, c)) {
        return "none";
    }

    if(a === b && b === c) {
        return "equilateral";
    }

    if(a === b || b === c || a === c) {
        return "isosceles";
    }

    return "scalene";
};