/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parent = [];
    let rank = [];

    for (let i = 0; i <= edges.length; i++) {
        parent[i] = i;
        rank[i] = 0;
    }

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        let rootX = find(x);
        let rootY = find(y);

        if (rootX === rootY) {
            return false;
        }

        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }

        return true;
    }

    for (const [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v];
        }
    }

    return [];
};

let edges = [[9,10],[5,8],[2,6],[1,5],[3,8],[4,9],[8,10],[4,10],[6,8],[7,9]];
console.log(findRedundantConnection(edges)); // [2,3]
