/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function(start, finish, limit, s) {
    let digits = new Array((finish + "").length).fill(0);

    function helper(s){
        let numS = parseInt(s, 10);
        return numS <= finish;
    }

    digits[s.length - 1] = parseInt(s, 10) >= start && parseInt(s, 10) <= finish ? 1 : 0;
    while(helper(s) && helper("9" + s)){
        if(s.length + 1< finish.toString().length){
            digits[s.length] = digits[s.length - 1] + limit;
        }else if(s.length + 1 === finish.toString().length){
            let firstCap = finish.toString()[0];
            let firstDigit = parseInt(firstCap, 10);
            console.log(firstDigit)
            let limitCap = firstDigit > limit ? limit : firstDigit;
            digits[s.length] = digits[s.length - 1] + limitCap;
        }

        s = "9" + s;
    }

    return digits;
    //return digits[digits.length - 1];
};

let start = 141;
let finish = 148;
let limit = 9;
let s = "9";
console.log(numberOfPowerfulInt(start, finish, limit, s)); // 4