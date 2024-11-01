/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let count = 0;
    let before_switch_c = '';
    let result = "";
    for (const c of s){
        if (before_switch_c !== c){
            before_switch_c = c;
            count = 0;
        }
        if (count > 1){
            continue;
        }
        result += c;
        count ++;
    }

    return result;
};

let s = "leeeetcoddde";
console.log(makeFancyString(s));