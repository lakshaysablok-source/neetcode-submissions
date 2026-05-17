class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let result = nums[0];
        let maxProduct = nums[0];
        let minProduct = nums[0];

        for (let i=1; i<nums.length; i++){
            const currentElement = nums[i];
            const tempMax = Math.max(currentElement, currentElement*maxProduct,currentElement* minProduct)
            const tempMin = Math.min(currentElement, currentElement*maxProduct,currentElement* minProduct)
            maxProduct = tempMax;
            minProduct = tempMin;
            result = Math.max(result, maxProduct, minProduct)

        }
        return maxProduct;
    }
}
