/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = [];

    for(const c of s){
        if(stack.length === 0){
            stack.push(c);
            continue;
        }

        if(c === ')' && stack[stack.length - 1] === '('){
            stack.pop();
        }else(
            stack.push(c)
        )
    }

    return stack.length;
};

console.log(minAddToMakeValid("())"));