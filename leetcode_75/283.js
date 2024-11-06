/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    function swap(a, b){
        return [nums[a], nums[b]] = [nums[b], nums[a]];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0){
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0){
                    swap(i, j);
                    break;
                }
            }
        }
        //console.log(nums);
    }

    //console.log(nums);
};

//faster way
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function moveZero(arr) {
    let pointer=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
      let temp=arr[i]
      arr[i]=arr[pointer]
      arr[pointer]=temp;
      pointer++;
    }
  }
  return arr
};



let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));