/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let result = 0;
    let the_best = values[0];   
    for (let i = 1; i < values.length; i++) {
        result = Math.max(result, the_best + values[i] - i);
        the_best = Math.max(the_best, values[i] + i);
    }

    return result;
};