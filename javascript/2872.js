/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */



var maxKDivisibleComponents = function(n, edges, values, k) {

    let graph = new Map();
    for(let [parent, child] of edges){
        if(!graph.has(parent)){
            graph.set(parent, []);
        }
        if(!graph.has(child)){
            graph.set(child, []);
        }
        graph.get(parent).push(child);
        graph.get(child).push(parent);
    }

    let component_count = 1;

    while(graph.size > 1){
        //console.log(graph, values);
        for(let [key, value] of graph){
            if(value.length === 1){
                graph.delete(key);
                graph.get(value[0]).splice(graph.get(value[0]).indexOf(key), 1);
                if(values[key] % k === 0){
                    component_count++;
                }else{
                    values[value[0]] += values[key];
                }
            }
        }
    }
    //console.log(graph, values);

    return component_count;
};

let n = 7;
let edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]];
let values = [3,0,6,1,5,2,1];
let k = 3;
console.log(maxKDivisibleComponents(n, edges, values, k));