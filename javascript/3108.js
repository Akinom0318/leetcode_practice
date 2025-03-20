/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
    class Union{
        // number of vertices
        constructor(n){
            this.parent = Array.from({length: n},(_, i) => i);
            this.rank = new Array(n).fill(0);   
        }
    
        find(i){
            let root = this.parent[i];
            if(this.parent[root] !== root){
                return this.parent[i] = this.find(root);
            }
    
            return root;
        }
    
        unionSet(x, y){
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

    let union = new Union(n);
    let minCost = new Array(n).fill(-1);

    for(const [u, v, weight] of edges){

        if(minCost[union.find(u)] !== -1 && minCost[union.find(v)] !== -1){
            let tmp = minCost[union.find(u)] & minCost[union.find(v)] & weight;
            union.unionSet(u ,v);
            minCost[union.find(u)] = tmp;
        }else{
            union.unionSet(u ,v);

            if(minCost[union.find(u)] === -1){
                minCost[union.find(u)] = weight;
            }else{
                minCost[union.find(u)] &= weight;
            }

        }

    }

    let result = [];
    for(const [start, end] of query){
        if(union.find(start) === union.find(end)){
            result.push(minCost[union.find(end)]);
        }else{
            result.push(-1);
        }
    }

    return result;
};

let n = 9;
let edges = [[5,0,6],[4,1,5],[4,1,4],[6,2,6],[0,4,7],[1,5,7],[7,1,6],[6,4,3],[7,1,7],[1,6,4]];
let query = [[0,8],[5,8],[6,0],[8,1],[2,8],[6,8],[0,6],[7,1],[5,2]];
console.log(minimumCost(n,edges,query));