// [2,7,11,15] 找 9
// 第一次循环 2 写入 map map[2] = 0
// 第二次循环 9-2=7 7在map中没有找到，写入map map[7] = 1
// 第三次循环 9-7=2 2在map中找到了，返回 [0,1]

var twoSum = function (nums, target) {
  let map = new Map();
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    let num = nums[i];
    let targetNum = map[target - num];
    if (targetNum !== undefined) {
      return [targetNum, i];
    }
    map[num] = i;
  }
  return [-1, -1];
};
