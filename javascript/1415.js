/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let happy = ["a", "b", "c"];
    let limit = 3 * Math.pow(2, n - 1);
    if(k > limit) return "";

    let happyStrings = [];
    let generateHappyStrings = function(n, str) {
        if(n === 0) {
            happyStrings.push(str);
            return;
        }
        for(const h of happy) {
            if(str === "" || str[str.length - 1] !== h) {
                generateHappyStrings(n - 1, str + h);
            }
        }
    }

    generateHappyStrings(n, "");
    return happyStrings[k - 1];

};

let n = 3, k = 9;
console.log(getHappyString(n, k)); // c