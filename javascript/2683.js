/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let val = 0;
    for(let i = 0; i < derived.length; i++){
        val ^= derived[i];
    }
    return val === 0;
};

let derived = [1,0];
console.log(doesValidArrayExist(derived)); // true