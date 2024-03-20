/* 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2] =》[1,2,3,4,100,200]
输出：4

解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109

思路：
1.  快排
2. 从index为1开始遍历，比较减一后是否等于前面一位的数字，若是，则count++，若否，则return当前数



 */



/**
 * @param {number[]} nums
 * @return {number}
 */
/* var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let max = 0
    
    for(let [key,val] of set.entries()){
        
        if(!set.has(val-1)){
        let cur = val
        let count = 1
        while(set.has(cur+1))
        {
            count++;
            cur++
        }
        max = Math.max(max,count)}
        
    }
    return max
}; */

/*
总结：
1. set中查找的时间复杂度是O(1)
2. 可以直接把arr丢到一个set中去重
3。 遍历set类比map可以用for...of遍历entries()，但记得加()
4. 要灵活使用while方法，不能只有for和if思维


*/