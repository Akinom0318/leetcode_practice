/**
* @param {string} s
* @return {boolean}
*/

function canBeDividedIntoThreePalidrome(s){
    if (s.length < 3) {
        return false;
    }

    let n = s.length;
    const isPal = Array.from({ length: n }, () => Array(n).fill(false));

    for( let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] ) {
                if(j - i <= 2) {
                    isPal[i][j] = true;
                }else {
                    isPal[i][j] = isPal[i + 1][j - 1];
                }
            }
        }
    }

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            if (isPal[0][i] && isPal[i + 1][j] && isPal[j + 1][n - 1]) {
                return true;
            }
        }
    }
    return false;

}