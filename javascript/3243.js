/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    let ans = [];
    let path = {};
    for (let i = 0; i < n - 1; i++) {
        path[i] = [i + 1];
    }
    for (const [start, end] of queries){
        let visited = new Set();
        path[start].push(end);

        let queue = [[0,0]]; // start
        visited.add(0);
        while (queue.length > 0) {
            //console.log(queue);
            let [current, layer] = queue.shift();
            if (current === n - 1) {
                ans.push(layer);
                break;
            }
            path[current].forEach((next) => {
                if (!queue.includes(next) && !visited.has(next)) {
                    queue.push([next, layer + 1]);
                    visited.add(next);
                }
            })
        }
    }


    return ans;
};

let n = 5;
let queries = [[2,4],[0,2],[0,4]];
console.log(shortestDistanceAfterQueries(n, queries));