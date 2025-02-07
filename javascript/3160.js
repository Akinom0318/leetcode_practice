/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let count = 0;
    let colored = new Map();
    let colorNum = new Map();
    let result = [];

    for(const [ball, color] of queries) {
        if(colorNum.get(colored.get(ball)) > 1) {
            colorNum.set(colored.get(ball), colorNum.get(colored.get(ball)) - 1);
        }else if(colorNum.get(colored.get(ball))) {
            colorNum.delete(colored.get(ball));
            count--;
        }

        if(!colorNum.get(color)) {
            count++;
        }
        colored.set(ball, color);
        colorNum.set(color, (colorNum.get(color) || 0) + 1);
        //console.log(colored, colorNum);

        result.push(count);
    }


    return result;
};

let limit = 4;
let queries = [[0,1],[0,4],[1,2],[1,5],[1,4]];
console.log(queryResults(limit, queries)); // [1,2,1,3]