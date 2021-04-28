/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //i从数组头开始 j从数组尾开始
   let i=0,j=height.length-1;
   //max保存最大值 根据square大小时刻更新
   let max=0,square=0;
   //当j到i的距离大于等于1时
   while(j-i>=1){
    if(height[i]>height[j]){
      console.log('j '+j,'i '+i,j-i)
      //此时的面积取决于短板
      square=height[j]*(j-i);
      console.log(square+'='+height[j]+'*'+(j-i))
      j--;
    }else{
      console.log('j '+j,'i '+i,j-i)
      square=height[i]*(j-i);
      console.log(square+'='+height[i]+'*'+(j-i))
      i++;
    } 
    //不断更新最大值
    max=Math.max(max,square);
   }
   return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
