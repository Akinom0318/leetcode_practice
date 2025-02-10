/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
      s.charCodeAt(i) < 97 ? stack.pop() : stack.push(s[i]);
    }

    return stack.join('');
};