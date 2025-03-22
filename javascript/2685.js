/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    class UnionFind{
        constructor(n){
            this.rank = new Array(n).fill(0);
            this.parent = Array.from({length: n},(_, i) =>i);
        }


        find(i){
            let root = this.parent[i];
            if(root !== this.parent[root]){
                return this.parent[i] = this.find(root);
            }

            return root;
        }

        union(x, y){
            let rootX = this.find(x);
            let rootY = this.find(y);

            if(this.rank[rootX] < this.rank[rootY]){
                this.parent[rootX] = rootY;
            }else if(this.rank[rootY] < this.rank[rootX]){
                this.parent[rootY] = rootX;
            }else{
                this.parent[rootY] = rootX;
                this.rank[rootX] ++;
            }

        }
    }

    let graph = new UnionFind(n);
    let edgeCount = new Array(n).fill(0);
    let nodeCount = new Array(n).fill(1);

    for(const [u, v] of edges){
        let rootU = graph.find(u);
        let rootV = graph.find(v);
        graph.union(u ,v);
        let root = graph.find(u);

        edgeCount[root] = edgeCount[rootU] + 1 + (rootU !== rootV ? edgeCount[rootV] : 0);
        nodeCount[root] = nodeCount[rootU] + (rootU !== rootV ? nodeCount[rootV] : 0);
        
    }


    let result = 0;
    let set = new Set();
    for(let i = 0; i < n; i ++){
        let root = graph.find(i);
        if(set.has(root)){
            continue;
        }


        set.add(root);

        if(nodeCount[root] * (nodeCount[root] - 1) / 2 === edgeCount[root]){
            result ++;
        }
    }


    return result;
};

let n = 6;
let edges = [[0,1],[0,2],[1,2],[3,4], [1,3]];
console.log(countCompleteComponents(n ,edges));