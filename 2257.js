/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    let map = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let res = m * n - walls.length - guards.length; 
    walls.forEach(([x,y]) => map[x][y] = 2);

    function checkBoundary(x,y){
        return x >= 0 && x < m && y >= 0 && y < n;
    }

    function lookFourDirections(x,y){
       for (let [dx, dy] of [[0,1],[0,-1],[1,0],[-1,0]]){
           let newX = x + dx;
           let newY = y + dy;
           while (checkBoundary(newX, newY) && map[newX][newY] < 2){
                if(map[newX][newY] === 0){
                    res -= 1;
                }
                map[newX][newY] = 1;
               newX += dx;
               newY += dy;
           }
       }
    }

    for (let [x,y] of guards){
        map[x][y] = 3;
    }
    for (let [x,y] of guards){
        lookFourDirections(x,y);
    }

    // let res = 0;
    // map.forEach(row => res += row.filter(cell => cell === 0).length);

    return res;
};

let m = 3;
let n = 3;
let guards = [[1,1]];
let walls = [[0,1],[1,0],[2,1],[1,2]];
console.log(countUnguarded(m, n, guards, walls)); // [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]]