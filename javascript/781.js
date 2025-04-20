/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let hashMap = new Map();
    let total = 0;
    for(let i = 0; i < answers.length; i++) {
        hashMap.set(answers[i], (hashMap.get(answers[i]) || 0) + 1);
        if(hashMap.get(answers[i]) === answers[i] + 1) {
            total += hashMap.get(answers[i]);
            hashMap.set(answers[i], 0);
        }
    }


    for(let [key, count] of hashMap) {
        total += count > 0 ? key + 1 : 0;
    }

    return total;
};

let ans = [1,0,1,0,0];
console.log(numRabbits(ans)); // 5