/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val) {
    const sharksbear ={
        toBe: function(expected){
            if(val === expected){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected){
            if(val !== expected){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
    return sharksbear;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */