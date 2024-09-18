/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let length = 0;
    for (let i = 0; i < args.length; i++) {
        length += 1;
    }
    return length;
};


/**
 * argumentsLength(1, 2, 3); // 3
 */