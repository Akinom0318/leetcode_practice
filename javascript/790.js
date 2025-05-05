/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    let mod = 1e9 + 7;
    let full = new Array(n + 1).fill(0);
    let gap = new Array(n + 1).fill(0);
    full[0] = 1;
    full[1] = 1;
    if (n >= 2) {
        full[2] = 2;
        gap[2] = 1;
    }

    for (let i = 3; i <= n; i++) {
        full[i] = (full[i - 1] + full[i - 2] + 2 * gap[i - 1]) % mod;
        gap[i] = (gap[i - 1] + full[i - 2]) % mod;
    }

    return full[n];
};