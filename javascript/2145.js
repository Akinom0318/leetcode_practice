/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let hidden = new Array(differences.length + 1).fill(0);
    let min = 0, max = 0;
    for(let i = 0; i < differences.length; i++) {
        hidden[i + 1] = hidden[i] + differences[i];
        min = Math.min(min, hidden[i + 1]);
        max = Math.max(max, hidden[i + 1]);
    }
    min = Math.min(min, hidden[0]);
    max = Math.max(max, hidden[0]);
    let range = upper - lower + 1;
    let total = max - min + 1;
    return total > range ? 0 : range - total + 1;
};