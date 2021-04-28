/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let i=0,j=height.length-1;
   let max=0,square=0;
   while(j-i>=1){
    if(height[i]>height[j]){
      //此时的面积取决于短板
      square=height[j]*(j-i);
      j--;
    }else{
      square=height[i]*(j-i);
      i++;
    } 
    //不断更新最大值
    max=Math.max(max,square);
   }
   return max;
};
