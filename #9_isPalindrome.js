/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //获取绝对值，分解反转后组合
    let result=(Math.abs(x) + '').split('').reverse().join('')
    //特殊情况
    if(result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) return 0;
    //如果为回文数
    if(result==x){
        return true
    }else{
        return false
    }
};