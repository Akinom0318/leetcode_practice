/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let new_string = "";
    let space_pointer = 0;
    let string_pointer = 0;
    while(string_pointer < s.length || space_pointer < spaces.length) {
        if (spaces[space_pointer] === string_pointer) {
            new_string += " ";
            space_pointer++;
        }
        new_string += s[string_pointer];
        string_pointer++;
    }

    return new_string;
};

let s = "LeetcodeHelpsMeLearn";
let spaces = [8,13,15];
console.log(addSpaces(s, spaces)); // "Leetcode Helps Me Learn"
