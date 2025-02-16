/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    let resultSequence = new Array(2 * n - 1).fill(0);
    let isNumberUsed = new Array(n + 1).fill(false);

    function findLexicographicallyLargestSequence(currentIndex) {
        if (currentIndex === resultSequence.length) {
            return true;
        }

        if (resultSequence[currentIndex] !== 0) {
            return findLexicographicallyLargestSequence(currentIndex + 1);
        }

        for (let numberToPlace = n; numberToPlace > 0; numberToPlace--) {
            if (isNumberUsed[numberToPlace]) {
                continue;
            }

            isNumberUsed[numberToPlace] = true;
            resultSequence[currentIndex] = numberToPlace;

            if (numberToPlace === 1) {
                if (findLexicographicallyLargestSequence(currentIndex + 1)) {
                    return true;
                }
            } else if (
                currentIndex + numberToPlace < resultSequence.length &&
                resultSequence[currentIndex + numberToPlace] === 0
            ) {
                resultSequence[currentIndex + numberToPlace] = numberToPlace;

                if (findLexicographicallyLargestSequence(currentIndex + 1)) {
                    return true;
                }

                resultSequence[currentIndex + numberToPlace] = 0;
            }

            resultSequence[currentIndex] = 0;
            isNumberUsed[numberToPlace] = false;
        }

        return false;
    }

    findLexicographicallyLargestSequence(0);
    return resultSequence;
};


let n = 5;
console.log(constructDistancedSequence(n)); // [5,3,1,4,3,5,2,4,2]