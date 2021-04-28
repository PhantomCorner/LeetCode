//两数组
function QuickSort(arr){
    let len=arr.length;
    if(len<=1)return arr;//结束条件，如果arr长度为1或0
        let left=[];
        let right=[];
        let p=arr[0];
        for(let i=1;i<len;i++){//比基小放左边，反之放右边
            if(arr[i]<=p)left.push(arr[i]);
            else right.push(arr[i]);
        }
        //返回的是左边+基+右边
        //concat() 方法用于连接两个或多个数组。
        return QuickSort(left).concat(p,QuickSort(right));
    }
//两指针
function quickSort(arr,low=0,high=arr.length-1){
    if(low>=high)return;
    let key =arr[low]
    let start=low;
    let end=high;
    //开始的时候key在最低点，所以要从右侧指针开始移动
    while(start<end){
        while(end>start&&arr[end]>=key)end--;
        if(arr[end]<key)[arr[end],arr[start]]=[arr[start],arr[end]];
        //从右侧找到了第一个比key小的数,执行交换之后key去了右侧，从左侧开始找比key大的数
        while(end>start&&arr[start]<=key)start++;
        if(arr[start]>key)[arr[end],arr[start]]=[arr[start],arr[end]];
        //再次交换之后，循环回去开始找右侧
    }
    //第一次快排结束之后，以start和end为分界找左右两个区间
    quickSort(arr,low,start-1);//左边有区间
    quickSort(arr,end+1,high);//右边有区间
}
