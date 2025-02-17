/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let hash = new Map();
    for(const c of tiles) {
        hash.set(c, (hash.get(c) || 0) + 1);
    }

    function backTracking(hash, str) {
        let count = 0;
        for(const [key, value] of hash) {
            if(value === 0) continue;
            hash.set(key, value - 1);
            count += backTracking(hash, str + key) + 1;
            hash.set(key, value);
        }
        return count;
    }

    return backTracking(hash, '');
};

let tiles = "AAB";
console.log(numTilePossibilities(tiles)); // 8