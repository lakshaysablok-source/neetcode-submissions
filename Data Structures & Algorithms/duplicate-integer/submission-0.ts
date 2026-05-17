class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let distinctValue = {};
        for (let i=0; i<nums.length; i++){
            const num =nums[i];
            if(distinctValue[num]){
                return true;
            }
            else{
                distinctValue[num] = true
            }
        }
        return false
    }
}
