/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let pointer = 0;
    let result = [];

    while(pointer < s.length){
        const word = s[pointer];
        let lastShowWordIndex = s.lastIndexOf(word);
        for(let i = pointer + 1; i <= lastShowWordIndex; i ++){
            const newLastShowWordIndex = s.lastIndexOf(s[i]);

            lastShowWordIndex = Math.max(newLastShowWordIndex, lastShowWordIndex);
        }

        result.push(lastShowWordIndex - pointer + 1);
        pointer = lastShowWordIndex + 1;
    }

    return result;
};

let s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));