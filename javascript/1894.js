/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let round_consume = chalk.reduce((sum, curr) => sum + curr, 0);
    let curr_round = k % round_consume;
    for (let i = 0; i < chalk.length; i++) {
        if(curr_round === 0){
            return i
        }       
        curr_round -= chalk[i];
        if(curr_round < 0){
            return i
        }         
    }
};