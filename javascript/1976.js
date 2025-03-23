/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    if(n === 1){
        return 1;
    }
    let dist = new Array(n).fill(Infinity);
    let graph = new Map();
    let dp = new Array(n).fill(0);
    let module = 1e9 + 7;
    dp[0] = 1;

    for(const [u, v, weight] of roads){
        if(!graph.has(u)){
            graph.set(u, []);
        }

        graph.get(u).push([v, weight]);

        if(!graph.has(v)){
            graph.set(v, []);
        }

        graph.get(v).push([u, weight]);
    }


    function dijkstra(graph, src){
        let priorityQueue = [];

        priorityQueue.push([0, src]);
        dist[src] = 0;

        while(priorityQueue.length > 0){

            let [dis, node] = priorityQueue.shift();

            for(const [v, weight] of graph.get(node)){
                if(dist[v] > weight + dis){
                    dist[v] = weight + dis;
                    dp[v] = dp[node];
                    priorityQueue.push([dist[v], v]);
                }else if(dist[v] === weight + dis){
                    dp[v] = (dp[node] + dp[v]) % module;
                }
            }

            priorityQueue.sort((a,b) => a[0] - b[0]);
        }
    }

    dijkstra(graph, 0);


    return dp[n - 1] % module;
};

let n = 7;
let roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]];
console.log(countPaths(n, roads));