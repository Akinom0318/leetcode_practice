/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings = meetings.sort((a, b) => a[0] - b[0]);

    let freeDays = 0;
    let lastestEndDay = 0;

    for(const [start, end] of meetings){
        if(start > lastestEndDay){
            freeDays += start - lastestEndDay - 1;
        }

        lastestEndDay = Math.max(lastestEndDay, end);
    }


    freeDays += days - lastestEndDay;

    return freeDays;
};
