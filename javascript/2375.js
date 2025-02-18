/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let str_n = pattern.length + 1;
    let str = "";
    let stack = [];
    let count = 1;
    for(const pat of pattern) {
        stack.push(count++);
        if(pat === "I") {
            while(stack.length) {
                str += stack.pop();
            }
        } 
    }
    stack.push(count++);
    while(stack.length) {
        str += stack.pop();
    }

    return str;
};

let pattern = "IDIDIDI";
console.log(smallestNumber(pattern)); // 3216540