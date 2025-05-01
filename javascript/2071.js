/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
function maxTaskAssign(tasks, workers, pills, strength) {
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);

    let n = tasks.length, m = workers.length;
    let left = 1, right = Math.min(n, m), ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(tasks, workers, pills, strength, mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

function check(tasks, workers, pills, strength, mid) {
    let p = pills;

    let map = new Map();
    for (let i = workers.length - mid; i < workers.length; ++i) {
        map.set(workers[i], (map.get(workers[i]) || 0) + 1);
    }

    let sortedKeys = [...map.keys()].sort((a, b) => a - b);

    for (let i = mid - 1; i >= 0; --i) {
        let task = tasks[i];

        let key = sortedKeys[sortedKeys.length - 1];
        if (key >= task) {
            map.set(key, map.get(key) - 1);
            if (map.get(key) === 0) {
                map.delete(key);
                sortedKeys.pop();
            }
        } else {
            if (p === 0) return false;

            let need = task - strength;
            let idx = lowerBound(sortedKeys, need);
            if (idx === sortedKeys.length) return false;

            let ceilKey = sortedKeys[idx];
            map.set(ceilKey, map.get(ceilKey) - 1);
            if (map.get(ceilKey) === 0) {
                map.delete(ceilKey);
                sortedKeys.splice(idx, 1);
            }

            p--;
        }
    }

    return true;
}

function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}



let tasks = [5,9,8,5,9];
let workers = [1,6,4,2,6];
let pills = 1;
let strength = 5;
console.log(maxTaskAssign(tasks, workers, pills, strength)); // 3