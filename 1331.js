/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let tmp_arr = ([...arr].map((item) => Number(item))).sort((a,b) => a - b);
    let table = {};
    let result = [];
    let rank = 1;
    for (let i = 0; i < tmp_arr.length; i++) {
        table[tmp_arr[i]] = rank;
        if(tmp_arr[i + 1] > tmp_arr[i]){
            rank ++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        result.push(table[arr[i]]);
    }

    return result;
};

let arr = [37,12,28,9,100,56,80,5,12];

console.log(arrayRankTransform(arr));