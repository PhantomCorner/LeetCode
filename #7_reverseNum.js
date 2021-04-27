/**
 * @param {number} x
 * @return {number}
 * 对输入的数字进行翻转，保留符号
 * Math.sign(3);     //  1
 * Math.sign(-3);    // -1
 * Math.sign("-3");  // -1
 * Math.sign(0);     //  0
 * Math.sign(-0);    // -0
 * Math.sign(NaN);   // NaN
 * Math.sign("foo"); // NaN
 * Math.sign();      // NaN
 */
var reverse = function(x) {
    //获取符号
    let sign = Math.sign(x)
    //获取输入的绝对值，分解，反转，组合
    //乘以获取到的符号值
    let result=(Math.abs(x) + '').split('').reverse().join('') * sign
    console.log(typeof(result))
    //特殊情况
    
    if(result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) return 0;
    //转换后输出
    return parseInt(result) ;
};
console.log(reverse(-123) )