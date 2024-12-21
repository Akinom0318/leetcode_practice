/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    if (!expression.includes('+') && !expression.includes('-') && !expression.includes('*')) {
        return [Number(expression)];
    }

    let result = [];
    for (let i = 0; i < expression.length; i++) {
        const c = expression[i];
        if(c === '+' || c === '-' || c === '*'){
            let left_result = diffWaysToCompute(expression.slice(0,i));
            let right_result = diffWaysToCompute(expression.slice(i + 1));

            for(let left of left_result){
                for(let right of right_result){
                    if (c === '+') {
                        result.push(left + right);
                    } else if (c === '-') {
                        result.push(left - right);
                    } else if (c === '*') {
                        result.push(left * right);
                    }
                }
            }
        }
    }

    return result;
};

let expression = "2-1-1";

console.log(diffWaysToCompute(expression));