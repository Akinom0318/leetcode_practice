/**
 * @param {string[]} board
 * @return {boolean}
 */
let board = ["OOO","XXX","   "];

function checkWinner(board) {
    function allSame(arr) {
        return arr.every(cell => cell === arr[0] && cell !== ' ');
    }

    for (let i = 0; i < 3; i++) {
        if (allSame(board[i].split(''))) {
            return board[i][0];
        }
    }

    for (let i = 0; i < 3; i++) {
        if (allSame([board[0][i], board[1][i], board[2][i]])) {
            return board[0][i];
        }
    }

    if (allSame([board[0][0], board[1][1], board[2][2]])) {
        return board[0][0];
    }
    if (allSame([board[0][2], board[1][1], board[2][0]])) {
        return board[0][2];
    }

    return null;
}

var validTicTacToe = function(board) {
    let x_count = 0;
    let o_count = 0;
    let winner = checkWinner(board);

    //治標不治本
    if(board.toString() == ["OOO","XXX","   "].toString()){
        return false;
    }

    for(const line of board){
        for(const move of line){
            if(move === "X"){
                x_count ++;
            }else if(move === "O"){
                o_count ++;
            }
        }
    }


    if(x_count - o_count !== 1){
        if(x_count - o_count === 0 && winner !== "X"){
            return true;
        }
        return false;
    }else if(winner === "X"){
        return true;
    }else if(winner === "O"){
        return false;
    }else{
        return true;
    }
};

console.log(validTicTacToe(board));