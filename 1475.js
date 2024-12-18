/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = [];
    prices.forEach((price, index) => {
        let pointer = index + 1;
        while (pointer < prices.length) {
            if (prices[pointer] <= price) {
                result.push(price - prices[pointer]);
                break;
            }
            pointer++;
            if (pointer === prices.length) {
                result.push(price);
            }
        }
    });

    result.push(prices[prices.length - 1]);
    return result;
};

let prices = [8, 4, 6, 2, 3];
console.log(finalPrices(prices));