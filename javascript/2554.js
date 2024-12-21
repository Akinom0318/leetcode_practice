/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let cur_sum = 0;
    let count = 0;
    for (let num = 1; num <= n; num++) {
        if (banned.includes(num)) continue;
        cur_sum += num;
        count++;
        if (cur_sum > maxSum) {
            cur_sum -= num;
            count--;
            break;
        }
    }
    return count
};


/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var improvedMaxCount = function (banned, n, maxSum) {
    const set = new Set()

    for (const item of banned) {
        if (item <= n) {
            set.add(item)
        }
    }
    let ret = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (set.has(i) === false) {
            sum += i

            if (sum > maxSum)
                break;

            ret++

        }
    }

    return ret
};