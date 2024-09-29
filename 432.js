
var AllOne = function() {
    this.string_table = {};
    this.frequency_table = {};
    this.max_key_count = 0;
    this.min_key_count = Infinity;
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if (this.string_table[key]) {
        let key_index = this.frequency_table[this.string_table[key]].indexOf(key);
        this.frequency_table[this.string_table[key]].splice(key_index, 1);
        if (this.frequency_table[this.string_table[key]].length === 0) {
            delete this.frequency_table[this.string_table[key]];
        }
    }

    this.string_table[key] = (this.string_table[key] || 0) + 1;

    if (!this.frequency_table[this.string_table[key]]) {
        this.frequency_table[this.string_table[key]] = [];
    }
    this.frequency_table[this.string_table[key]].push(key);

    this.max_key_count = Math.max(this.max_key_count, this.string_table[key]);

    if (this.min_key_count === this.string_table[key] - 1 && (!this.frequency_table[this.min_key_count] || this.frequency_table[this.min_key_count].length === 0)) {
        this.min_key_count = this.string_table[key];
    } else {
        this.min_key_count = Math.min(this.min_key_count, this.string_table[key]);
    }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if (this.string_table[key]) {
        let key_index = this.frequency_table[this.string_table[key]].indexOf(key);
        this.frequency_table[this.string_table[key]].splice(key_index, 1);
        if (this.frequency_table[this.string_table[key]].length === 0) {
            delete this.frequency_table[this.string_table[key]];
        }
    }

    this.string_table[key]--;

    if (this.string_table[key] === 0) {
        delete this.string_table[key];
    } else {
        if (!this.frequency_table[this.string_table[key]]) {
            this.frequency_table[this.string_table[key]] = [];
        }
        this.frequency_table[this.string_table[key]].push(key);
    }

    if (!this.frequency_table[this.max_key_count] || this.frequency_table[this.max_key_count].length === 0) {
        this.max_key_count = Object.keys(this.frequency_table).length > 0 ? Math.max(...Object.keys(this.frequency_table)) : 0;
    }

    if (!this.frequency_table[this.min_key_count] || this.frequency_table[this.min_key_count].length === 0) {
        if (Object.keys(this.frequency_table).length > 0) {
            this.min_key_count = Math.min(...Object.keys(this.frequency_table));
        } else {
            this.min_key_count = Infinity;
        }
    }
};


/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    if(this.frequency_table[this.max_key_count] !== undefined && this.frequency_table[this.max_key_count][0]){
        return this.frequency_table[this.max_key_count][0];
    }

    return "";
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if(this.frequency_table[this.min_key_count] !== undefined && this.frequency_table[this.min_key_count][0]){
        return this.frequency_table[this.min_key_count][0];
    }

    return "";
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

