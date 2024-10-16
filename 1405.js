/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let sorted_array = [['a', a], ['b', b], ['c', c]].sort((a,b) => b[1] - a[1]);
    let result = [];

    while(sorted_array.length > 0){
        if(sorted_array[sorted_array.length - 1][1] === 0){
            sorted_array.pop();
        }

        if(sorted_array[sorted_array.length - 1] !== undefined && result[result.length - 2] === result[result.length - 1] && result[result.length - 1] === sorted_array[0][0]){
            if(sorted_array.length === 1){
                break;
            }
            result.push(sorted_array[sorted_array.length - 1][0]);
            sorted_array[sorted_array.length - 1][1] - 1 === 0 ? sorted_array.pop() : sorted_array[sorted_array.length - 1][1] --;
        }else{
            result.push(sorted_array[0][0]);
            sorted_array[0][1] - 1 === 0 ? sorted_array.shift() : sorted_array[0][1] --;
        }


        sorted_array.sort((a, b) => b[1] - a[1]);
    }


    return result.join('');
};


let a = 7;
let b = 1;
let c = 0;
console.log(longestDiverseString(a,b,c));