/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
    let sortByX = rectangles.sort((a, b) => a[0] - b[0]);


    let latestX = 0;
    let possibleCut = 0;
    for(const [x1, y1, x2, y2] of sortByX){
        if(x1 >= latestX && latestX !== 0){
            possibleCut ++;
        }
        latestX = Math.max(latestX, x2);
    }

    if(possibleCut >= 2){
        return true;
    }

    let sortByY = rectangles.sort((a, b) => a[1] - b[1]);
    let latestY = 0;
    possibleCut = 0;

    for(const [x1, y1, x2, y2] of sortByY){
        if(y1 >= latestY && latestY !== 0){
            possibleCut ++;
        }
        latestY = Math.max(latestY, y2);
    }

    if(possibleCut >= 2){
        return true;
    }


    return false;
};

let n = 4;
let rectangles = [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]];
console.log(checkValidCuts(n, rectangles));

