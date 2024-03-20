/* 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

 

示例 1:
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

示例 2:
输入: strs = [""]
输出: [[""]]

示例 3:
输入: strs = ["a"]
输出: [["a"]]
 

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母 */


/* 思路
遍历字符串数组元素。用split拆开元素，快排字符串，记录到map中。通过

map = {
    eat: aet
    tea: aet
    tan: ant
    ate: aet
    nat: ant
    bat: abt
}
思路正确，但是应该把字母异位词作键，然后将字符串push到哈希表对应字母异位词的值中

map1 = {
    aet: eat,tea,ate
    ant: tan,nat
    bat: bat
}
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */


/* var groupAnagrams = function(strs) {
    const map = new Map()
    for (const str of strs){
        allogramWord = str.split('').sort().join('')
        if(map.has(allogramWord)){
            map.get(allogramWord).push(str)
        }else{
            map.set(allogramWord,[str])
        }
    }
    const res = []
    map.forEach(value){
        res.push(value)
    }
    return res
};

总结：
1. 是否使用 const 或 let 取决于你是否需要在之后的代码中引用或修改这个数组。
    如果数组只是临时创建并立即使用，那么不需要单独声明。 
2. split用来分割字符串，join用来合并数组成字符串，互补关系
3. 思路决定成败
*/