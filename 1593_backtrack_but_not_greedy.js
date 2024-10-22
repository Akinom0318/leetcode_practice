/*
var maxUniqueSplit = function(s) {
    let hash = {};
    let chars = [];
    
    for (const c of s){
        chars.push(c);
        let tmp_string = chars.join('');
        if(hash[tmp_string]){
            continue;
        }else{
            hash[tmp_string] = hash[tmp_string] | 1;
            chars = [];
        }
        console.log(c, hash, Object.keys(hash).length);
    }

    return Object.keys(hash).length;
};

*/

// second attempt:
/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let maxUnique = 0;
    
    const backtrack = (start, seen) => {
        if (start === s.length) {
            maxUnique = Math.max(maxUnique, seen.size);
            return;
        }

        for (let i = start + 1; i <= s.length; i++) {
            let substring = s.slice(start, i);
            if (!seen.has(substring)) {
                seen.add(substring);  // Add the substring to the set
                backtrack(i, seen);   // Recurse with the next start point
                seen.delete(substring);  // Backtrack by removing the substring
            }
        }
    };

    backtrack(0, new Set());
    return maxUnique;
};

let s = "wwwzfvedwfvhsww";
console.log(maxUniqueSplit(s));