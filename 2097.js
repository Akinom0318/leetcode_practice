/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
    let out_edges = {};
    let in_edges = {};
    let start_node = 0;
    let ans = [];
    
    for (let [u, v] of pairs) {
        if (!out_edges[u]) {
            out_edges[u] = [];
        }
        out_edges[u].push(v);
        
        if (!in_edges[v]) {
            in_edges[v] = 0;
        }
        in_edges[v]++;
        
        if (!in_edges[u]) {
            in_edges[u] = 0;
        }
        
        start_node = u;
    }
    
    for (let [u, v] of pairs) {
        if (out_edges[u].length - in_edges[u] === 1) {
            start_node = u;
            break;
        }
    }
    
    let stack = [start_node];
    while (stack.length > 0) {
        let node = stack[stack.length - 1];
        if (out_edges[node] && out_edges[node].length > 0) {
            stack.push(out_edges[node].pop());
        } else {
            ans.push(stack.pop());
        }
    }
    
    let result = [];
    for (let i = ans.length - 1; i > 0; i--) {
        result.push([ans[i], ans[i - 1]]);
    }
    
    return result;
};

let pairs = [[8,5],[8,7],[0,8],[0,5],[7,0],[5,0],[0,7],[8,0],[7,8]];
console.log(validArrangement(pairs));