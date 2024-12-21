/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    let teams = new Set();

    for (const edge of edges) {
        teams.add(edge[1]);
    }

    if (teams.size < n - 1) {
        return -1;
    }

    for (let i = 0; i < n; i++) {
        if (!teams.has(i)) {
            return i;
        }
    }

};