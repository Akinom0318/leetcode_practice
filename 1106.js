/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {

    function parseHelper(expressions,operator){
        let result = expressions[0];
        if(operator === '!'){
            return result === 0 ? 1 : 0;
        }else if(operator === '&'){
            for (let i = 1; i < expressions.length; i++) {
                result = (result & expressions[i]);
           }
        }else if(operator === '|'){
            for (let i = 1; i < expressions.length; i++) {
                result = (result | expressions[i]);
           }
        }else{
            return expressions;
        }
        return result;
    }

    let stack = [];
    for (const c of expression){
        if(c === ','){
            continue;
        }
        if(c === ')'){
            let current_expression = [];
            let popped = stack.pop();
            while(popped !== '('){
                current_expression.push(popped)
                popped = stack.pop();
            }
            popped = stack.pop();
            current_expression.push(popped)
            //console.log(current_expression);
            let return_value = parseHelper(current_expression.slice(0, current_expression.length - 1), current_expression[current_expression.length - 1]);
            if(typeof(return_value) === typeof([])){
                return_value.forEach((item) => stack.push(item));
            }else{
                stack.push(return_value);
            }
            //console.log(stack);
        }else{
            if(c === 't'){
                stack.push(1);
            }else if(c === 'f'){
                stack.push(0)
            }else{
                stack.push(c)
            }
        }
    }

    let ans = stack[0];
    if(stack.length > 1){
        ans = parseHelper(stack.slice(1,stack.length), stack[0]);
    }
    //console.log(ans);

    return ans === 1 ? true : false;
};


let expression = "|(&(t,f,t),t)";
let expression2 = "|(f,f,f,t)";
let expression3 = "&(t,t,t)";
console.log(parseBoolExpr(expression3));