/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while(s.includes(part)) {
        s = s.replace(part, '');
    }



    return s;
}

let s = "daabcbaabcbc"
let part = "abc"
console.log(removeOccurrences(s, part)); // Output: "dab"

//stack ver.
class Solution {
    removeOccurrences(s, part) {
        let stack = [];
        let partLength = part.length;

        // Iterate through each character in the string
        for (let char of s) {
            // Push current character to stack
            stack.push(char);

            // If stack size is greater than or equal to the part length, check for match
            if (stack.length >= partLength && this._checkMatch(stack, part, partLength)) {
                // Pop the characters matching 'part' from the stack
                for (let i = 0; i < partLength; i++) {
                    stack.pop();
                }
            }
        }

        // Convert stack to string with correct order
        return stack.join('');
    }

    // Helper function to check if the top of the stack matches the 'part'
    _checkMatch(stack, part, partLength) {
        // Compare the top 'partLength' elements of the stack with 'part'
        return stack.slice(-partLength).join('') === part;
    }
}