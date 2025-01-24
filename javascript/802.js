var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const state = Array(n).fill(0);
    const result = [];

    function dfs(node) {
        if (state[node] !== 0) {
            return state[node] === 2;
        }

        state[node] = 1;
        for (const next of graph[node]) {
            if (!dfs(next)) {
                return false;
            }
        }

        state[node] = 2;
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            result.push(i); 
        }
    }

    return result;
};


let graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]];
console.log(eventualSafeNodes(graph));