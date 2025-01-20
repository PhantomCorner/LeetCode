//找数组里有几个连续的 0
// [1,0,0,0,1,]=> 3 => 可以种 1 棵花
// 可种花的数量=(连续的0的数量-1)/2
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let spot = countConsecutiveZeros(flowerbed);
  return n == (spot - 1) / 2;
};
function countConsecutiveZeros(arr) {
  let maxZeros = 0;
  let currentZeros = 0;
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      currentZeros++; // 当前连续的 0 增加
      maxZeros = Math.max(maxZeros, currentZeros); // 更新最大连续 0 的数量
    } else {
      currentZeros = 0; // 遇到非 0 重置连续计数
    }
  }

  return maxZeros;
}
// testing push
