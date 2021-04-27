/**
 * 一次只能1层或两层，共有多少种爬法
 * n=1 => 1种（1）
 * n=2 => 2种（1+1，2）
 * n=3 => 3种（1+1+1，2+1,1+2）
 * n=4 => 5种（1+1+1+1+1,2+2,1+2+1,2+1+1,1+1+2）
 * 可以得出 爬到N层的方法数=前两层方法的合
 * 
 * f(4)=f(4-1)+f(4-2)
 *     =f(3)+f(2)
 *     =5
 * @param {number} n 
 * @returns {number}
 */
var climbStairs = function(n) {
        const dp = [];
        //爬第0层有1种方法
        dp[0] = 1;
        //爬第1层有1种方法
        dp[1] = 1;
        //从第二层开始
        for(let i = 2; i <= n; i++) {
            //当前层数的方法=前两层方法合
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    };
    
console.log(climbStairs(4))