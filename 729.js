
var MyCalendar = function() {
    this.date = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(const booked_event of this.date){
        let [booked_start, booked_end] = booked_event;
        if(start < booked_end && end > booked_start){
            return false;
        }
    }

    this.date.push([start,end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */