/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 找到连续 k 个元素的最大平均值

var findMaxAverage = function (nums, k) {
  let len = nums.length;
  let sum = 0;
  let max;
  //  先计算前 k 个元素的和
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max = sum;
  // 从第 k 个元素开始遍历
  // 每次减去第 i-k 个元素，加上第 i 个元素
  // 更新最大值
  for (let i = k; i < len; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }
  return max / k;
};
