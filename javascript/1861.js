/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const m = box.length;
    const n = box[0].length;

    for (let row = 0; row < m; row++) {
        let empty = n - 1; 
        for (let col = n - 1; col >= 0; col--) {
            if (box[row][col] === '*') {
                empty = col - 1;
            } else if (box[row][col] === '#') {
                box[row][col] = '.';
                box[row][empty] = '#';
                empty--;
            }
        }
    }

    const rotatedBox = [];
    for (let col = 0; col < n; col++) {
        const newRow = [];
        for (let row = m - 1; row >= 0; row--) {
            newRow.push(box[row][col]);
        }
        rotatedBox.push(newRow);
    }

    return rotatedBox;
};


let box = [["*","#","*",".",".",".","#",".","*","."]];
console.log(rotateTheBox(box)); // [["."], ["#"], ["#"]]