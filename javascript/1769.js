/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let left_prefix = new Array(boxes.length).fill(0);
    let right_prefix = new Array(boxes.length).fill(0);
    let ones = 0;
    for(let i = 1; i < boxes.length; i++){
        left_prefix[i] = left_prefix[i - 1];
        if(boxes[i - 1] === "1"){
            ones++;
        }
        left_prefix[i] += ones;
    }

    ones = 0;
    for(let i = boxes.length - 2; i >= 0; i--){
        right_prefix[i] = right_prefix[i + 1];
        if(boxes[i + 1] === "1"){
            ones++;
        }
        right_prefix[i] += ones
    }

    let res = [];
    for(let i = 0; i < boxes.length; i++){
        res.push(left_prefix[i] + right_prefix[i]);
    }

    return res;
};

let boxes = "001011";
console.log(minOperations(boxes)); // [1,1,3]