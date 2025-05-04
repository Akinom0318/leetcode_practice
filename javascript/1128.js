/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    function combinationBy2(n) {
        return (n * (n - 1)) / 2;
    }
    let map = new Map();
    for (let i = 0; i < dominoes.length; i++) {
        let a = dominoes[i][0];
        let b = dominoes[i][1];
        let key = a > b ? `${b},${a}` : `${a},${b}`;
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    let result = 0;
    for (let [key, value] of map) {
        result += combinationBy2(value);
    }

    return result;
};