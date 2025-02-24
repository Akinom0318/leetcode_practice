/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
// my attempt :(
var mostProfitablePath = function(edges, bob, amount) {
    let adjacentList = new Map();
    for (let [u, v] of edges) {
        if (!adjacentList.has(u)) {
            adjacentList.set(u, []);
        }
        if (!adjacentList.has(v)) {
            adjacentList.set(v, []);
        }
        adjacentList.get(u).push(v);
        adjacentList.get(v).push(u);
    }

    let amountMap = new Map();
    for (let i = 0; i < amount.length; i++) {
        amountMap.set(i, amount[i]);
    }

    let bobVisited = new Set();
    let aliceVisited = new Set();


    let bobsPath = [];
    function bobDfs(node, visited, bobPath) {
        visited.add(node);
        bobPath.push(node);
        for (let neighbor of adjacentList.get(node)) {
            if(neighbor === 0){
                bobPath.push(neighbor);
                bobsPath = [...bobPath];
                return;
            }
            if (!visited.has(neighbor) && bobsPath.length === 0) {
                bobDfs(neighbor, visited, bobPath);
                bobPath.pop();
            }

        }
    }

    bobDfs(bob, bobVisited, []);

    let maxProfit = -Infinity;
    function aliceDfs(amountMap ,node, tick, currentProfit){
        if(tick >= bobsPath.length){
            tick -= 1;
        }
        aliceVisited.add(node);

        let bob_node = bobsPath[tick];
        let profit = amountMap.get(node);

        if(node === bob_node){
            profit /= 2;
        }

        amountMap.set(bob_node, 0);


        currentProfit += profit;
        //console.log("node", node, "tick", tick, "profit", profit, "currentProfit", currentProfit, "bob_node", bob_node);
        if(adjacentList.get(node).length === 1 && node !== 0){
            maxProfit = Math.max(maxProfit, currentProfit);
            return;
        }

        for (let neighbor of adjacentList.get(node)) {
            if (!aliceVisited.has(neighbor)) {
                aliceDfs(amountMap, neighbor, tick + 1, currentProfit);
            }
        }

    }

    aliceDfs(amountMap, 0, 0, 0);

    return maxProfit;
};

let edges = [[0,2],[1,4],[1,6],[2,4],[3,6],[3,7],[5,7]];
let bob = 4;
let amount = [-6896,-1216,-1208,-1108,1606,-7704,-9212,-8258];
console.log("1",mostProfitablePath(edges, bob, amount)); // 8

let edges2 = [[0,1]];
let bob2 = 1;
let amount2 = [1,-2];
console.log(mostProfitablePath(edges2, bob2, amount2)); // 1

/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    let n = amount.length;
    let tree = Array.from({ length: n }, () => []);
    let distanceFromBob = new Array(n).fill(0);

    for (let [u, v] of edges) {
        tree[u].push(v);
        tree[v].push(u);
    }

    return findPaths(0, -1, 0, bob, amount, tree, distanceFromBob, n);
};

function findPaths(sourceNode, parentNode, time, bob, amount, tree, distanceFromBob, n) {
    let maxIncome = 0;
    let maxChild = -Infinity;

    if (sourceNode === bob) {
        distanceFromBob[sourceNode] = 0;
    } else {
        distanceFromBob[sourceNode] = n;
    }

    for (let adjacentNode of tree[sourceNode]) {
        if (adjacentNode !== parentNode) {
            maxChild = Math.max(
                maxChild,
                findPaths(adjacentNode, sourceNode, time + 1, bob, amount, tree, distanceFromBob, n)
            );
            distanceFromBob[sourceNode] = Math.min(
                distanceFromBob[sourceNode],
                distanceFromBob[adjacentNode] + 1
            );
        }
    }

    if (distanceFromBob[sourceNode] > time) {
        maxIncome += amount[sourceNode];
    }
    else if (distanceFromBob[sourceNode] === time) {
        maxIncome += Math.floor(amount[sourceNode] / 2);
    }

    return maxChild === -Infinity ? maxIncome : maxIncome + maxChild;
}
