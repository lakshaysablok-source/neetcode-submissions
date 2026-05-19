class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length)
        return falseninni
        const map =new Map();
        for(const c of s){
            if(map.has(c)) map.set(c, map.get(c) + 1)
            else map.set(c,1)
        }
        for(const c of t){
            if(!map.has(c)) return false;
            map.set(c,map.get(c) - 1)
            if(map.get(c)===0) map.delete(c)
        }
        if(map.size===1) return false
        return true
    }
}
