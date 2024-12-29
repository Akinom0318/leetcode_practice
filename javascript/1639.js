/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
function numWays(words, target) {
    const MOD = 1000000007;
    const wordLength = words[0].length;
    const targetLength = target.length;

    const charFrequency = Array.from({ length: wordLength }, () => Array(26).fill(0));
    for (const word of words) {
        for (let j = 0; j < wordLength; j++) {
            charFrequency[j][word[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }

    let prevCount = new Array(targetLength + 1).fill(0);
    let currCount = new Array(targetLength + 1).fill(0);

    prevCount[0] = 1;

    for (let currWord = 1; currWord <= wordLength; currWord++) {
        currCount = [...prevCount]; 
        for (let currTarget = 1; currTarget <= targetLength; currTarget++) {
            const curPos = target[currTarget - 1].charCodeAt(0) - 'a'.charCodeAt(0);

            currCount[currTarget] +=
                (charFrequency[currWord - 1][curPos] * prevCount[currTarget - 1]) % MOD;
            currCount[currTarget] %= MOD;
        }

        prevCount = [...currCount];
    }

    return currCount[targetLength];
}


let words = ["acca","bbbb","caca"];
let target = "aba";

console.log(numWays(words, target));