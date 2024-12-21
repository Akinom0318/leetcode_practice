/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 * attempt 1: TLE
 */
var longestCommonPrefix = function(arr1, arr2) {
    function LongestPrefixLength(a,b){
        let result = 0;
        for(let i = 0; i < a.length; i++) {
            const a_c = a[i];
            const b_c = b[i];
            if(a_c !== b_c){
                return result;
            }else{
                result ++;
            }
        }
       
        return result;
    }


    let str_arr1 = [...arr1].map((item) => String(item)).sort();
    let str_arr2 = [...arr2].map((item) => String(item)).sort();
    let max_length = 0;

    console.log(str_arr1,str_arr2);

    for (let i = 0; i < str_arr1.length; i++) {
        const num_1 = str_arr1[i];
        for (let j = 0; j < str_arr2.length; j++) {
            const num_2 = str_arr2[j];
            max_length = Math.max(LongestPrefixLength(num_1, num_2), max_length);
            //console.log(num_1,num_2,max_length);
        }
    }

    return max_length;
};

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let str_arr1 = [...arr1].map((item) => String(item));
    let str_arr2 = [...arr2].map((item) => String(item));
    let max_length = 0;

    let table = {};

    //hash table implement
    for (let i = 0; i < str_arr1.length; i++) {
        const word = str_arr1[i];
        for (let j = 0; j < word.length; j++) {
            const prefix = word.slice(0,j + 1);
            if(table[prefix] > 0){
                continue;
            }
            table[prefix] = (prefix.length || 0);
        }
        
    }

    for (let i = 0; i < str_arr2.length; i++) {
        const word = str_arr2[i];
        for (let j = word.length; j > 0; j--) {
            const prefix = word.slice(0,j);
            max_length = Math.max(max_length, (table[prefix] || 0));
            if(table[prefix] > 0){
                break;
            }
        }
    }

    return max_length;
};



let arr1 = [27,13,45];
let arr2 = [21,27,48];

console.log(longestCommonPrefix(arr1,arr2));