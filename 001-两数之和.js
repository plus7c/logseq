/* 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 
示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1] */

/* 暴力枚举 很难通过
    遍历判断当前元素是否小于目标值
    若小于，则将下标放入res数组 -》继续遍历往后元素，看看有没有相加等于目标值的 -》 有则return，无则继续遍历下一个元素
    若大于，不遍历

    let res = [];
var twoSum = function (nums, target) {
    nums.forEach((item, index) => {
        if (item < target) {
            res = [];
            res.push(index);
            checkSecondNumber(nums, index, target);
        } else if (res.length === 2) {
            return res;
        }
    });
    return;
};

var checkSecondNumber = function (nums, firstIndex, target) {
    nums.slice(firstIndex).forEach((item, secondIndex) => {
        if (item < target) {
            if (item + nums[firstIndex] === target) {
                res.push(secondIndex);
                return;
            }
        } else if (res.length === 2) return;
    });
    return;
};
*/

/* 哈希表
    遍历元素，记录每个元素的值和index，
    再遍历哈希表，看看是否存在target-self的值，有则返回，无则继续遍历下一元素。
    注意，要判断哈希表中的值是否和当前值一样

    var twoSum = function (nums, target) {
  const map = new Map();
  let res = [];
  for (const [index, element] of nums.entries()) {
    map.set(index, element);
    for (const [targetIndex, targetElement] of map) {
      if (targetElement + element === target && (targetIndex!==index)) {
        res = [targetIndex, index];
        break
      }
    }
  }
  return res
};

*/

/* 总结
1. 哈希表的键具有唯一性
2. 数组可通过for(const [index,value] of arr.entries())的方法来递归遍历数组的index和value 
3. map的常见用法有set,get,has,forEach等等
4. forEach一般用来执行某个方法，不能提前break或者返回一个值
*/


