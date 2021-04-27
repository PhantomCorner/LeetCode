/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    //用parseInt将输入转化为10进制
    //如果被解析参数的第一个字符无法被转化成数值类型，则返回NaN
    //s='abc is 123' =>NaN
    //s='123 is abc' =>123
    let result=parseInt(s,10);
    //特殊条件
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return result < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    }

    if(isNaN(result)){
        return 0
    }else{
            return result
        }
};
