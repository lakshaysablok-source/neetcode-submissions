class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 0;
        for (i=0; i<nums.length; i++){
            for (j=1; j<nums.length-1; j++){
                product += nums[j]*nums[j+1]*nums[j-1]
            }
            return product;
        }
    }
}
