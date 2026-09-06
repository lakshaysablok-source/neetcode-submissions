class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let currentProduct = nums[0];
        let maxProduct = nums[0];

        for(let i=1; i<nums.length; i++){
            let currentElement = nums[i];
            currentProduct=Math.max(currentElement, currentElement+currentProduct);

            maxProduct = Math.max(currentProduct,maxProduct);
        }
        return maxProduct
    }
}
