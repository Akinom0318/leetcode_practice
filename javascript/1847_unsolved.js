/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function(rooms, queries) {
    let result = [];
    let upperBound = rooms.length - 1;
    let lowerBound = 0;

    function comFn(a,b){
        return a[0][1] - b[0][1] === 0 ? a[0][0] - b[0][0] : a[0][1] - b[0][1];
    }

    let indexRooms = [];
    rooms.forEach((query,i) => {
        indexRooms.push([query, i]);
    })

    function binarySearchSize(target, lowerBound, upperBound, rooms){
        let left = lowerBound;
        let right = upperBound;
        let result = -1;
        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);
            if(rooms[mid][0][1] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
                result = mid;
            }
        }

        return result;
    }

    function binarySearchPre(target, lowerBound, upperBound, rooms){
        let left = lowerBound;
        let right = upperBound;

        if(lowerBound === -1){
            return -1;
        }

        let closeness = Infinity;

        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);
            if(Math.abs(rooms[mid - 1][0][0] - target) > closeness){
                left = mid + 1;
            }else if(Math.abs(rooms[mid + 1][0][0] - target) > closeness){
                right = mid - 1;
            }else{
                right = mid - 1;
                result = mid;
            }
        }

    }


    for(const query of queries){
        result.push(binarySearchSize(query[1], query[0], lowerBound, upperBound, indexRooms));
    }
    return result;
};

let rooms = [[2,2],[1,2],[3,2]];
let queries = [[3,1],[3,3],[5,2]];
console.log(closestRoom(rooms, queries));