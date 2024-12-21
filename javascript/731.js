
var MyCalendarTwo = function() {
    this.date = [];
    this.overlapped = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for(const overlapped_date of this.overlapped){
        let [overlapped_start, overlapped_end] = overlapped_date
        if(start < overlapped_end && end > overlapped_start){
            return false;
        }
    }

    for(const booked_event of this.date){
        let [booked_start, booked_end] = booked_event;
        if(start < booked_end && end > booked_start){
            let overlap_start = Math.max(start, booked_start);
            let overlap_end = Math.min(end, booked_end);
            if (overlap_start < overlap_end) {
                this.overlapped.push([overlap_start, overlap_end]);
            }
        }
    }

    this.date.push([start,end]);
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */