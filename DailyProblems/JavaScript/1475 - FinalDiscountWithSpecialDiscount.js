/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const answer = [];
    let jLoop = 0;
    for (let i = 0; i < prices.length; i++){
        for (let j = i+1; j <= prices.length; j++){
            jLoop = j;
            if (prices[i] >= prices[j]) {
                answer[i] = prices[i] - prices[j];
                break;
            }
            if (prices[j+1] === undefined) {
                answer[i] = prices[i];
            }
        }
    }
    return answer;
};
