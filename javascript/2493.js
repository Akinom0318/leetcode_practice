/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
    const adjList = Array.from({ length: n }, () => []);
    const parent = Array(n).fill(-1);
    const depth = Array(n).fill(0);

    // Build adjacency list and apply Union-Find
    for (const [u, v] of edges) {
        adjList[u - 1].push(v - 1);
        adjList[v - 1].push(u - 1);
        union(u - 1, v - 1, parent, depth);
    }

    const numOfGroupsForComponent = new Map();

    for (let node = 0; node < n; node++) {
        const numberOfGroups = getNumberOfGroups(adjList, node, n);
        if (numberOfGroups === -1) return -1;
        const rootNode = find(node, parent);
        numOfGroupsForComponent.set(
            rootNode,
            Math.max(numOfGroupsForComponent.get(rootNode) || 0, numberOfGroups)
        );
    }

    return Array.from(numOfGroupsForComponent.values()).reduce((a, b) => a + b, 0);
};

function getNumberOfGroups(adjList, srcNode, n) {
    const queue = [srcNode];
    const layerSeen = Array(n).fill(-1);
    layerSeen[srcNode] = 0;
    let deepestLayer = 0;

    while (queue.length > 0) {
        const numOfNodesInLayer = queue.length;
        for (let i = 0; i < numOfNodesInLayer; i++) {
            const currentNode = queue.shift();
            for (const neighbor of adjList[currentNode]) {
                if (layerSeen[neighbor] === -1) {
                    layerSeen[neighbor] = deepestLayer + 1;
                    queue.push(neighbor);
                } else if (layerSeen[neighbor] === deepestLayer) {
                    return -1; // Invalid partition
                }
            }
        }
        deepestLayer++;
    }
    return deepestLayer;
}

function find(node, parent) {
    while (parent[node] !== -1) {
        node = parent[node];
    }
    return node;
}

function union(node1, node2, parent, depth) {
    node1 = find(node1, parent);
    node2 = find(node2, parent);
    if (node1 === node2) return;

    if (depth[node1] < depth[node2]) {
        [node1, node2] = [node2, node1];
    }
    parent[node2] = node1;
    if (depth[node1] === depth[node2]) {
        depth[node1]++;
    }
}
