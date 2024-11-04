/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let shifted = s.split('');
    for (let i = 0; i < s.length; i ++){
        let c = shifted.shift();
        shifted.push(c);
        if (shifted.join('') === goal){
            return true;
        }

    }
    return false;
};

//faster way:
var rotateString1 = function (s, goal) {
    let string = s+s;
    console.log(string);
    return goal.length === s.length && string.includes(goal)
};

let s = "abcde";
let goal = "cdeab";
console.log(rotateString1(s,goal));