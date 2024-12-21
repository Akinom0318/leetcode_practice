/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    if (start.replace(/_/g, '') !== target.replace(/_/g, '')) {
        return false;
    }

    let tIndex = 0;
    for (let sIndex = 0; sIndex < start.length; sIndex++) {
        if (start[sIndex] === '_') continue;
        while (target[tIndex] === '_') tIndex++;
        if (start[sIndex] !== target[tIndex]) return false;
        if (start[sIndex] === 'L' && sIndex < tIndex) return false;
        if (start[sIndex] === 'R' && sIndex > tIndex) return false;
        tIndex++;
    }

    return true;
};

let start = "_R";
let target = "L_";
console.log(canChange(start, target));