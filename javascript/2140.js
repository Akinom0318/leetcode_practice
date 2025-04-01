/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let n = questions.length;
    let dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let [points, brainpower] = questions[i];
        let nextIndex = i + brainpower + 1;
        let solve = points + (nextIndex < n ? dp[nextIndex] : 0);
        let skip = dp[i + 1];
        dp[i] = Math.max(solve, skip);
    }

    return dp[0];
};

let questions = [[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]];
console.log(mostPoints(questions));