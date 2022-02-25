---
title: 怎么写二分法不易出错
date: 2017-12-28
categories:
 - 算法
tags:
 - 算法
 - 二分法
---



# 二分法适用：
- 有序数组
- 找值

先看 leetcode 35题：


给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

我的新写法

```
var searchInsert = function(nums, target) {
    if(nums[0] > target) return 0
    if(nums[nums.length - 1] < target) return nums.length

    let left = -1, right = nums.length;

    while(left + 1 !== right) {
        let mid = left + ~~((right - left) / 2)

        if(nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }

    return right

}
```



leetcode 407 比较简单

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

例子1
```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

新写法
```
function search(nums, target) {

    let left = -1, right = nums.length;

    while(left + 1 !== right) {
        let mid = left + ~~((right - left) / 2)

        if(nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }

    if(nums[left] === target) return left
    if(nums[right] === target) return right
    return -1
}
```


leetcode 278

第一个错误的版本

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。


实例1

```
输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false 
调用 isBadVersion(5) -> true 
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本
```

```
var solution = function(isBadVersion) {
    return function(n) {
        let left = 0, right = n + 1;

        while (left + 1 !== right) {
            const mid = left + ~~((right - left) / 2)
            if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid
            }
        }
        return right
    };
};
```