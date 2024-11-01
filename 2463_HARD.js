/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const memo = new Map();

   function helper(current_robot, current_factory, used_capacity){
        if (current_robot === robot.length){
            return 0;
        }

        if (current_factory === factory.length){
            return Number.MAX_SAFE_INTEGER;
        }

        let key = `${current_robot}, ${current_factory}, ${used_capacity}`;
        if (memo.has(key)){
            return memo.get(key);
        }

        let minDist = Number.MAX_SAFE_INTEGER;
        minDist = helper(current_robot, current_factory + 1, 0);
        const [position, capacity] = factory[current_factory];
        if (used_capacity < capacity){
            let dis = Math.abs(robot[current_robot] - position);
            minDist = Math.min(minDist, dis + helper(current_robot + 1, current_factory, used_capacity + 1));
        }

        memo.set(key, minDist);
        return minDist;
    }

    return helper(0, 0, 0);
};


//let robot = [9,11,99,101];
let robot1 = [0,4,6];
//let factory = [[10,1],[7,1],[14,1],[100,1],[96,1],[103,1]];
let factory1 = [[2,2],[6,2]];
//console.log(minimumTotalDistance(robot, factory));
console.log(minimumTotalDistance(robot1, factory1));
