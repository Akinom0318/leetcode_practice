/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let list = String(num).split('');
    let n = list.length;

    let swap_candidate = new Array(n).fill(0);
    swap_candidate[n - 1] = n - 1;

    for (let i = n - 2; i > -1; i--) {
        if(list[i] > list[swap_candidate[i + 1]]){
            swap_candidate[i] = i;
        }else{
            swap_candidate[i] = swap_candidate[i + 1];
        }
    }

    for (let i = 0; i < n; i++) {
        if(list[i] < list[swap_candidate[i]]){
            let tmp = list[i];
            list[i] = list[swap_candidate[i]];
            list[swap_candidate[i]] = tmp;
            break;
        }
    }


    return Number(list.join(''));
};

let num = 9765432180;

console.log(maximumSwap(num));