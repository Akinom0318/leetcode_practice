/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let lastDay = days[days.length - 1];
    let dp = new Array(lastDay + 1).fill(0);


    let i = 0;
    for (let day = 1; day <= lastDay; day++){
        if(day < days[i]){
            dp[day] = dp[day - 1];
            continue;
        }else{
            i++;
            dp[day] = Math.min(
                dp[day - 1] + costs[0],
                dp[Math.max(0, day - 7)] + costs[1],
                dp[Math.max(0, day - 30)] + costs[2]
            );
        }
    }

    return dp[lastDay];
};

let days = [1,2,3,4,5,6,7,8,9,10,30,31];
let costs = [2,7,15];
console.log(mincostTickets(days, costs));