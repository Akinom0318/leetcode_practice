/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 1;
    let right = Math.min(...ranks) * Math.pow(cars,2);

    let result = 0;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let repaired = 0;

        for(const rank of ranks){
            repaired += Math.floor(Math.sqrt(mid / rank));
            if(repaired >= cars){
                break;
            }
        }

        if(repaired >= cars){
            result = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return result;
};

let ranks = [4,2,3,1];
let cars = 10;
console.log(repairCars(ranks, cars));