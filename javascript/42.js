/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxleft = new Array(height.length).fill(0);
    let maxright = new Array(height.length).fill(0);
    let water = 0;
    let pointer = 0;
    for (let i = 1; i < height.length; i++) {
        maxleft[i] = Math.max(maxleft[i - 1], height[i - 1]);
        maxright[height.length - i - 1] = Math.max(maxright[height.length - i], height[height.length - i]);
        
        pointer = Math.min(maxleft[i], maxright[i]);
        if (pointer > height[i]) {
            water += pointer - height[i];
        }
    }

    return water;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // 6