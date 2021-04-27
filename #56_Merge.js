/**
 * https://www.bilibili.com/video/BV1AJ411J7yN?p=21 12:00
 * 合并区间:
 * input=[[1,2] [3,4] [5,6].....]
 * 输出连续区间合并后的结果
 * 
 * 如果当前区间的左端点在前一个区间的右端点后 那么他们不会重合
 * [a,b] [c,d] 如果c>b => 不重合
 *       当前↓
 *[3,5]  [6,7] 不会重合
 * 
 * 如果当前区间的左端点在前一个区间的右端点前 那么他们重合
 * [a,b] [c,d] 如果c<b => 重合 =>[a,d]
 *       当前↓
 *[1,3]  [2,6] 重合 => [1,6]
 */

 var merged=function(input){
     if(input==null) return
     console.log(input)
     //对输入进行排序
    
     input.sort((a,b)=>a[0]-b[0]);
     //获取输入中的第一个区间
     let merged=[input[0]]
     //从开头循环到结尾
     for(i=0;i<input.length;i++){
        //数组长度
        let length=merged.length;
        //获取当前指针指向的输入中的区间
        let current=input[i];
        //获取merged数组中的最后一项
        let compare=merged[length-1];
        //当前区间的左<=前一个区间的右
        if(current[0]<=compare[1]){
            //如果当前区间的右>前一个区间的右
            if(current[1]>compare[1]) 
                compare[1]=current[1]

        }else{
            //不能合并 将当前区间放入merged数组
            merged.push(current)
        }
     }
     return merged
 }
 console.log(merged([[1,3],[2,6],[8,16],[15,18]]))