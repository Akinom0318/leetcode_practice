/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
    let level_nodes = new Map();
    function BFS(node) {
        let queue = [node];
        let level = 0;
        while (queue.length) {
            let next_queue = [];
            for (let i = 0; i < queue.length; i++) {
                let curr = queue[i];
                if (curr.left) next_queue.push(curr.left);
                if (curr.right) next_queue.push(curr.right);
                if(level_nodes.has(level)) {
                    level_nodes.get(level).push(curr.val);
                }else{
                    level_nodes.set(level, [curr.val]);
                }
            }
            queue = next_queue;
            level++;
        }
    }

    function minSwapsToSort(arr) {
        let n = arr.length;
    
        let sortedArr = arr.map((value, index) => [value, index]);
        
        sortedArr.sort((a, b) => a[0] - b[0]);
    
        let visited = new Array(n).fill(false);
        let swapCount = 0;
    
        for (let i = 0; i < n; i++) {
            if (visited[i] || sortedArr[i][1] === i) {
                continue;
            }
    
            let cycleSize = 0;
            let current = i;
    
            while (!visited[current]) {
                visited[current] = true;
                current = sortedArr[current][1];
                cycleSize++;
            }
    
            if (cycleSize > 1) {
                swapCount += cycleSize - 1;
            }
        }
    
        return swapCount;
    }
    
    

    BFS(root);
    let swap_count = 0;
    for (const [key, value] of level_nodes.entries()) {
        swap_count += minSwapsToSort(value);
    }
    return swap_count;
};