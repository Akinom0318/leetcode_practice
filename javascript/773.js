/**
 * @param {number[][]} board
 * @return {number}
 */

var slidingPuzzle = function(board) {
    //BFS to iterate all posibilities to find the least step to complete the board
    let target = "123450";
    let queue = [];
    let visited = new Set();
    let steps = 0;
    let dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let start = '';
    for(let i=0; i<2; i++){
        for(let j=0; j<3; j++){
            start += board[i][j];
        }
    }
    queue.push(start);
    visited.add(start);
    while(queue.length > 0){
        let size = queue.length;
        for(let i = 0; i < size; i ++){
            let cur = queue.shift();
            if(cur === target){
                return steps;
            }
            let zeroIndex = cur.indexOf('0');
            let x = Math.floor(zeroIndex / 3); //define in which row the zero is
            let y = zeroIndex % 3; //define in which column the zero is
            for(let dir of dirs){
                let newX = x + dir[0];
                let newY = y + dir[1];
                if(newX >= 0 && newX < 2 && newY >= 0 && newY < 3){
                    let newZeroIndex = newX * 3 + newY;
                    let newCur = cur.split('');
                    [newCur[zeroIndex], newCur[newZeroIndex]] = [newCur[newZeroIndex], newCur[zeroIndex]];
                    newCur = newCur.join('');
                    if(!visited.has(newCur)){
                        queue.push(newCur);
                        visited.add(newCur);
                    }
                }
            }
        }
        steps++;
    }
    return -1;
};

let board = [[4,1,2],[5,0,3]];
console.log(slidingPuzzle(board));