/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let frequency = {};
    for(const c of s1){
        frequency[c] = (frequency[c] || 0) + 1;
    }
    
    for (let index = 0; index <= s2.length - s1.length; index++) {
        const possible_permutation = s2.slice(index, index + s1.length);
        let tmp_table = {...frequency};
        for (let per_index = 0; per_index < possible_permutation.length; per_index++) {
            if(tmp_table[possible_permutation[per_index]] === undefined){
                break;
            }else{
                tmp_table[possible_permutation[per_index]] -= 1;
                if(tmp_table[possible_permutation[per_index]] === 0){
                    delete tmp_table[possible_permutation[per_index]];
                }
            }
        }
        
        if(Object.keys(tmp_table).length === 0){
            return true;
        }
    }

    return false;
};

// Better solution
/*   
/**

var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false
    }

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    // Count frequency of characters in s1
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - aCharCode]++;
        s2Count[s2.charCodeAt(i) - aCharCode]++;
    }

    let matches = 0;
    // Compare the initial window
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) {
            matches++;
        }
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches === 26) return true;

        let leftCharIndex = s2.charCodeAt(i) - aCharCode;
        let rightCharIndex = s2.charCodeAt(i + s1.length) - aCharCode;

        // Remove the left character from the window
        s2Count[leftCharIndex]--;
        if (s1Count[leftCharIndex] === s2Count[leftCharIndex]) {
            matches++;
        } else if (s1Count[leftCharIndex] === s2Count[leftCharIndex] + 1) {
            matches--;
        }

        // Add the right character to the window
        s2Count[rightCharIndex]++;
        if (s1Count[rightCharIndex] === s2Count[rightCharIndex]) {
            matches++;
        } else if (s1Count[rightCharIndex] === s2Count[rightCharIndex] - 1) {
            matches--;
        }
    }


    return matches === 26
};
*/

let str1 = "ab";
let str2 = "eidbaooo";
console.log(checkInclusion(str1,str2));