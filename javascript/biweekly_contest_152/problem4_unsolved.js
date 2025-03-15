/**
 * @param {number[][]} edges
 * @param {number[]} nums
 * @return {number[]}
 */
var longestSpecialPath = function(edges, nums) {
    let graph = new Map();
    let color = new Map();

    for(const [u,v,val] of edges){
        if(!graph.get(u)){
            graph.set(u, [])
        }
        if(!graph.get(v)){
            graph.set(v, [])
        }
        graph.get(u).push([v, val]);
        graph.get(v).push([u, val]);

    }

    for(let i = 0; i < nums.length; i ++){
        let num = nums[i];
        color.set(i, num);
    }

    let visited = new Array(nums.length).fill(false);
    let maxLength = -Infinity;
    let minNodes = Infinity;

    for(let i = 0; i < nums.length; i++){
        let localMinNodes = 1;
        let localmaxLength = 0;
        visited[i] = true;
        while(graph.get(i)){
            let nextNode = graph.get(i).pop();
            
        }
    }


    return graph;
};

let edges = [[0,1,1],[1,2,3],[1,3,1],[2,4,6],[4,7,2],[3,5,2],[3,6,5],[6,8,3]];
let nums = [1,1,0,3,1,2,1,1,0];
console.log(longestSpecialPath(edges,nums));