/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let n = s.length;
    let freq = new Map();
    for (let i = 0; i < n; i++) {
        if (freq.has(s[i])) {
            freq.set(s[i], freq.get(s[i]) + 1);
        } else {
            freq.set(s[i], 1);
        }
    }
    
    //console.log(freq);
    let res = 0;
    for(let [key, value] of freq) {
        if(value > 3){
            if(value % 2 === 0){
                res += 2;
            }else{
                res++;
            }
        }else if(value === 3){
            res++;
        }else{
            res += value;
        }
    }

    return res;
};

let s = "ucvbutgkohgbcobqeyqwppbxqoynxeuuzouyvmydfhrprdbuzwqebwuiejoxsxdhbmuaiscalnteocghnlisxxawxgcjloevrdcj";
console.log(minimumLength(s)); // 2