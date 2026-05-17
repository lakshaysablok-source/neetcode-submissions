class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let currentSum = nums[0];
        let maxSum = nums[0];
        for (let i =1; i<nums.length; i++){
            const currentElement = nums[i];
            currentSum=Math.max(currentElement, currentSum + currentElement)
            maxSum =Math.max(currentSum, maxSum)
        }
        return maxSum;
    }
}
