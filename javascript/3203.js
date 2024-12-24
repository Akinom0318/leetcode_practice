/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    if (edges1.length === 0){
        edges1 = [[0,0]];
    }

    if (edges2.length === 0){
        edges2 = [[0, 0]];
    }

    class adjacentList {
        constructor() {
            this.list = {};
        }
        addNode(node) {
            if (!this.list[node]) this.list[node] = [];
        }
        addEdge(node1, node2) {
            this.addNode(node1);
            this.addNode(node2);
            this.list[node1].push(node2);
            this.list[node2].push(node1);
        }
    }
    const graph1 = new adjacentList();
    const graph2 = new adjacentList();
    edges1.forEach(edge => graph1.addEdge(...edge));
    edges2.forEach(edge => graph2.addEdge(...edge));

    let maxPath1 = Infinity;

    let maxPath2 = Infinity;

    function longestPath(graph, start) {
        const visited = new Set();
        let maxPath = 0;
        let maxNode = start;
        function bfs(node, depth) {
            visited.add(node);
            if (depth > maxPath) {
                maxNode = node;
            }
            maxPath = Math.max(maxPath, depth);
            for (let neighbor of graph.list[node]) {
                if (!visited.has(neighbor)) {
                    bfs(neighbor, depth + 1);
                }
            }
        }
        bfs(start, 0);
        visited.clear();
        bfs(maxNode, 0);

        return maxPath;
    }

    maxPath1 = longestPath(graph1, 0);
    maxPath2 = longestPath(graph2, 0);
    //console.log(maxPath1, maxPath2);
    return Math.max(
        Math.ceil(maxPath1 / 2) + Math.ceil(maxPath2 / 2) + 1,
        maxPath1,
        maxPath2
    );

};

let edges1 = [[0,1]];
let edges2 = [[0,1],[0,2],[0,3]];
console.log(minimumDiameterAfterMerge(edges1, edges2)); // 3