class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for( let i=1; i<prices.length; i++){
            let curr = prices[i];
            let prr = prices[i-1];
            if (curr > prr){
                profit+= curr-prr;
            }
        }
        return profit
    }
}
