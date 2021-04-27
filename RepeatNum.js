/**https://www.bilibili.com/video/BV1AJ411J7yN?p=21 
 * [1,2,3,4,5,6.....,1]
 * 查找数组内的重复数字
 * @param {number[]} nums 
 * @return {number}
 */

var foundRepeat=function(nums){
    //使用哈希表
    let hash={}
    //循环获取的输入
    for(let val of nums){
        //如果当前循环到的数字已经在哈希表内存在
        if(hash[val]!==undefined){
            //返回
            return val;
        }else{
            //当前循环到的数字不在哈希表内
            hash[val]=true
        }
    }


};

console.log(foundRepeat([1,2,3,4,3]))