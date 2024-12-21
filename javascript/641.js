var MyCircularDeque = function(k) {
    this.queue = new Array(k).fill(0);
    this.capacity = k;
    this.size = 0;
    this.front_index = 0;
    this.back_index = k - 1; 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.front_index = (this.front_index - 1 + this.capacity) % this.capacity;
    this.queue[this.front_index] = value;
    this.size++;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.back_index = (this.back_index + 1) % this.capacity;
    this.queue[this.back_index] = value;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.front_index = (this.front_index + 1) % this.capacity;
    this.size--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.back_index = (this.back_index - 1 + this.capacity) % this.capacity;
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.front_index];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.back_index];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.capacity;
};
