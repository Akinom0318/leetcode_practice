/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    let ans = new Array(queries.length).fill(false);
    let totalPrerequisties = new Array(numCourses).fill([]).map(() => new Array());
    let startnodes = [];

    for (let i = 0; i < prerequisites.length; i++) {
        let [start, end] = prerequisites[i];
        totalPrerequisties[end].push(start);
    }

    for(let i = 0; i < totalPrerequisties.length; i++) {
       if(totalPrerequisties[i].length === 0) {
           startnodes.push(i);
       }
    }

    while(startnodes.length > 0) {
        let node = startnodes.shift();
        for(let i = 0; i < totalPrerequisties.length; i++) {
            if(totalPrerequisties[i].includes(node)) {
                totalPrerequisties[i].push(...totalPrerequisties[node]);
                totalPrerequisties[i] = [...new Set(totalPrerequisties[i])];
                startnodes.push(i);
            }
        }
    }

    for(let i = 0; i < queries.length; i++) {
        let [start, end] = queries[i];
        if(totalPrerequisties[end].includes(start)) {
            ans[i] = true;
        }
    }

    return ans;
};

let numCourses = 3;
let prerequisites = [[1,2],[1,0],[2,0]];
let queries = [[1,0],[1,2]];
console.log(checkIfPrerequisite(numCourses, prerequisites, queries));