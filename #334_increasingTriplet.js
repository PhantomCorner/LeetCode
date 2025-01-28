/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 给一个数组 nums， 判断是否存在三个元素 a， b， c， 使得 a < b < c
// 但是不要求 a b c 连续
var increasingTriplet = function (nums) {
  let smallest = nums[0];
  let secoundSmallest = Number.MAX_VALUE;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > secoundSmallest) {
      return true;
    } else if (nums[i] > smallest) {
      secoundSmallest = nums[i];
    } else {
      smallest = nums[i];
    }
  }
  return false;
};
