/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let str1 = "AB";
    let str2 = "CD";

    let tmp = s;

    while(tmp.indexOf(str1) >= 0 || tmp.indexOf(str2) >= 0){
        if(tmp.indexOf(str1) >= 0){
            tmp = tmp.replace("AB",'');
        }
        if(tmp.indexOf(str2) >= 0){
            tmp = tmp.replace("CD",'');
        }
    }

    return tmp.length
};

//attemp 2
/**
 * @param {string} s
 * @return {number}
 */
var minLength2 = function(s) {
    let stack = [];

    for(const c of s){
        if(stack.length === 0){
            stack.push(c);
            continue;
        }

        if(c === 'B' && stack[stack.length - 1] === 'A'){
            stack.pop();
        }else if(c === 'D' && stack[stack.length - 1] === 'C'){
            stack.pop();
        }else{
            stack.push(c);
        }
    }

    return stack.length;
};




let s = "ABFCACDB";
console.log(minLength2(s));