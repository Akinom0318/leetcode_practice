/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    let graph = new Array(numCourses).fill(0).map(() => []);
    let isPrerequisite = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));

    for (let [u, v] of prerequisites) {
        graph[u].push(v);
    }

    let dfs = (u, start) => {
        for (let v of graph[u]) {
            if (!isPrerequisite[start][v]) {
                isPrerequisite[start][v] = true;
                dfs(v, start);
            }
        }
    };

    for (let i = 0; i < numCourses; i++) {
        dfs(i, i);
    }

    return queries.map(([u, v]) => isPrerequisite[u][v]);
};

let numCourses = 3;
let prerequisites = [[1,2],[1,0],[2,0]];
let queries = [[1,0],[1,2]];
console.log(checkIfPrerequisite(numCourses, prerequisites, queries));