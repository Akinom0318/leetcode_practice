

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
    function isPrime(num) {
        if (num <= 1) return false; // Numbers less than 2 are not prime
        if (num <= 3) return true;  // 2 and 3 are prime numbers
        if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate even numbers and multiples of 3
    
        // Check divisibility up to the square root of the number
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    

    function isSorted(array){
        if (array.length === 1){
            return true;
        }
        for (let i = 0; i < array.length; i ++){
            if (array[i] <= array[i - 1]){
                return false;
            }
        }
        return true;
    }

    if (isSorted(nums)){
        return true;
    }

    let prev = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let prime = nums[i] - 1; prime >= 0; prime --){
            //console.log(prime,isPrime(prime) ,  nums[i] - prime);
            if (isPrime(prime) && prev < nums[i] - prime){
                nums[i] -= prime;
                break;
            }
        }
        //console.log(nums.slice(i));
        if (isSorted(nums)){
            return true;
        }
        prev = nums[i];
    }

    return false;
};

let nums = [11,2,10,15,19];
console.log(primeSubOperation(nums));