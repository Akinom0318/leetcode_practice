/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.current_size = 0;
    this.max_size = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.max_size === this.current_size){
        return;
    }
    this.stack.push(x);
    this.current_size ++;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.current_size === 0){
        return -1
    }
    this.current_size --;
    return this.stack.pop();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for (let i = 0; i < k; i++) {
        if(i === this.current_size){
            break;
        }
        this.stack[i] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */