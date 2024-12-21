/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let total_count = 0;

    for (let i = 0; i < s.length; i ++){
        if (i % 2 === 1 && s[i] !== s[i - 1]){
            total_count ++;
        }
    }
    
    return total_count;
};


let s = "0100";
console.log(minChanges(s));